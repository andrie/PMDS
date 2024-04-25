import {createRefMap, createRef, waitFor, waitUntil, all, PossibleVector2} from '@motion-canvas/core';

import {Txt, Line} from '@motion-canvas/2d';
import {makeStandaloneScene} from './utils';

function pinset(outset=0):PossibleVector2[] {
  const points:number[][] =  [
      [-200, 70],
      [150, 90],
      [-70, -200],
  ];

  // Calculate the lengths of the sides of the triangle
  const a = Math.hypot(points[1][0] - points[2][0], points[1][1] - points[2][1]);
  const b = Math.hypot(points[2][0] - points[0][0], points[2][1] - points[0][1]);
  const c = Math.hypot(points[0][0] - points[1][0], points[0][1] - points[1][1]);

  // Calculate the incenter
  const incenter: PossibleVector2 = [
      (a * points[0][0] + b * points[1][0] + c * points[2][0]) / (a + b + c),
      (a * points[0][1] + b * points[1][1] + c * points[2][1]) / (a + b + c)
  ];

  // Scale points around the incenter
  return points.map(p => {
      const dx = p[0] - incenter[0];
      const dy = p[1] - incenter[1];
      const distance = Math.hypot(dx, dy);
      const angle = Math.atan2(dy, dx);
      const scaledDistance = distance + outset;
      return [
          incenter[0] + scaledDistance * Math.cos(angle),
          incenter[1] + scaledDistance * Math.sin(angle)
      ] as PossibleVector2;
  });

}


function poffset(outset=0):PossibleVector2[] {
    const points:number[][] =  [
        [-200, 70],
        [150, 90],
        [-70, -200],
    ];

    // Calculate the lengths of the sides of the triangle
    const a = Math.hypot(points[1][0] - points[2][0], points[1][1] - points[2][1]);
    const b = Math.hypot(points[2][0] - points[0][0], points[2][1] - points[0][1]);
    const c = Math.hypot(points[0][0] - points[1][0], points[0][1] - points[1][1]);

    // Calculate the circumcenter
    const D = 2 * (points[0][0] * (points[1][1] - points[2][1]) + points[1][0] * (points[2][1] - points[0][1]) + points[2][0] * (points[0][1] - points[1][1]));

    const Ux = ((points[0][0] * points[0][0] + points[0][1] * points[0][1]) * (points[1][1] - points[2][1]) + (points[1][0] * points[1][0] + points[1][1] * points[1][1]) * (points[2][1] - points[0][1]) + (points[2][0] * points[2][0] + points[2][1] * points[2][1]) * (points[0][1] - points[1][1])) / D;
    const Uy = ((points[0][0] * points[0][0] + points[0][1] * points[0][1]) * (points[2][0] - points[1][0]) + (points[1][0] * points[1][0] + points[1][1] * points[1][1]) * (points[0][0] - points[2][0]) + (points[2][0] * points[2][0] + points[2][1] * points[2][1]) * (points[1][0] - points[0][0])) / D;

    const outcenter: PossibleVector2 = [Ux, Uy];

    // Scale points around the outcenter
    return points.map(p => {
        const dx = p[0] - outcenter[0];
        const dy = p[1] - outcenter[1];
        const distance = Math.hypot(dx, dy);
        const angle = Math.atan2(dy, dx);
        const scaledDistance = distance + outset;
        return [
            outcenter[0] + scaledDistance * Math.cos(angle),
            outcenter[1] + scaledDistance * Math.sin(angle)
        ] as PossibleVector2;
    });
}


export default makeStandaloneScene(function* example(view) {

  const lines = createRefMap<Line>();
  const hello = createRef<Txt>();



  view.add(
    <>
        <Txt ref={hello} position={[20,0]} size={100} fill={"red"} stroke={"red"}>hello</Txt>
        <Line
            ref={lines.triangleOne}
            points={poffset()} 
            stroke={'lightseagreen'}
            lineWidth={4}
            closed
            />,
            <Line
            ref={lines.triangleTwo}
            points={poffset()}
            stroke={'lightseagreen'}
            lineWidth={4}
            closed
        />,
    </>
  );
   yield* all(
    // hello().absolutePosition(lines.triangleOne().absolutePosition(), 2),
    lines.triangleTwo().points(poffset(100), 2)
    // lines.triangleTwo().absolutePosition(lines.triangleOne().absolutePosition())
    );
  yield* waitFor(1);
});