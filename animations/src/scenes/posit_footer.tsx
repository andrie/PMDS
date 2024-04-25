import {makeScene2D, Circle} from '@motion-canvas/2d';
import {all, sequence, useLogger, makeRef, useRandom, DEFAULT} from '@motion-canvas/core';


function gridCircle(ref:any, x:number, y:number, size:number, scale:number) {
  return(
    <Circle 
      ref={ref}
      position={[x, y]}
      size={size}
      fill={"#A2B8CB"}
      // fill={"#305775"}
      scale={scale}
    />
  )
}

export default makeScene2D(function* (view) {
  const circles: Circle[] = [];
  const size = 28;
  const nrows = 64;
  const ncols = 6;
  const random = useRandom(5);
  const logger = useLogger();
  let z = 0;

  view.add(
  <>
    {Array.from({ length: nrows }, (_, i) => {
      const ncirc = random.nextInt(0, ncols);
      return Array.from({ length: ncols }, (_, j) => {
        if (j <= ncirc) {
          z = z + 1;
          const x = -(1920 / 2) + (i + 0.5) * (size + 2); // x
          const y = (1024 / 2) - (j - (ncols / 2)) * size * (1 + 1/18) - size * 3;  // y
          const scale = random.nextFloat(0.5, 1 - j / ncols / 2); // scale
          // logger.info({message: `ij: [${i}, ${j}], xy: [${x}, ${Math.round(y)}]`});
          return gridCircle(makeRef(circles, z), x, y, size, scale);
        }
      });
    })}
  </>
  );

  yield* sequence(
    0.01, ...circles.map(p => p.fill('#305775', 1).to("#A2B8CB", 1)),);
    
});
