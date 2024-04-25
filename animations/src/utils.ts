import {View2D, makeScene2D} from '@motion-canvas/2d';
import {
  FullSceneDescription,
  ThreadGenerator,
  ThreadGeneratorFactory,
  ValueDispatcher,
  makeProject,
  ProjectSettings,
} from '@motion-canvas/core';

type CyclicConfig<T> = (params: T) => CyclicConfig<T>;

export function parameterize<T>(scene: FullSceneDescription, params: T) {
  const typeScene = scene as FullSceneDescription<CyclicConfig<T>>;
  let newScene = {
    ...typeScene,
    config: typeScene.config(params),
    onReplaced: new ValueDispatcher(scene),
  };

  typeScene.onReplaced.subscribe(value => {
    newScene.onReplaced.current = {
      ...newScene,
      config: value.config(params),
    };
  }, false);

  return newScene;
}

export function makeParametrizedScene<T>(
  factory: (view: View2D, params: T) => ThreadGenerator,
) {
  return makeScene2D(
    ((params: T) =>
      function* (view: View2D) {
        yield* factory(view, params);
      }) as unknown as ThreadGeneratorFactory<View2D>,
  );
}




export function makeStandaloneScene(
  runner: ThreadGeneratorFactory<View2D>,
): ProjectSettings {
  const description = makeScene2D(runner);
  return makeProject({
    scenes: [
      {
        name: runner.name ?? 'unknown',
        onReplaced: new ValueDispatcher(description),
        ...description,
      } as FullSceneDescription,
    ],
  });
}