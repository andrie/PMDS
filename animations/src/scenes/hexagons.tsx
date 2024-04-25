import {makeScene2D} from '@motion-canvas/2d';
import {Node, Circle, Polygon, Txt, Layout} from '@motion-canvas/2d/lib/components';
import {delay, waitFor, waitUntil} from '@motion-canvas/core/lib/flow';
import {createRef, makeRef, range, useRandom} from '@motion-canvas/core/lib/utils';
import {all, chain, sequence} from '@motion-canvas/core/lib/flow';
import { Colors, Posit } from '../styles';

function gridPoly(ref:any, x:number, y:number, size:number, opacity:number) {
  return(
    <Polygon 
      ref={ref}
      x={x}
      y={y}
      size={size}
      fill={Posit.gray}
      lineWidth={3}
      // stroke={Colors.whiteAlpha50}
      stroke={Colors.almostBlack}
      scale={0}
      opacity={opacity}
    />
  )
}

function cos(th:number) { return(Math.cos(th / 180 * Math.PI)) }
function sin(th:number) { return(Math.sin(th / 180 * Math.PI)) }


export default makeScene2D(function* (view) {
  const polys: Polygon[] = [];
  const size = 180;
  const nrows = 9;
  const ncols = 14;
  const highlight = 25; // the polygon to highlight
  const highlightColor = Posit.orange;

  view.add(
  <>
    {Array.from({ length: nrows }, (_, i) => 
      Array.from({ length: ncols }, (_, j) => 
        gridPoly(makeRef(polys, i * ncols + j), 
        (j - (ncols / 2)) * size * cos(30) + (i % 2) * size * cos(30) / 2, 
        -size * i * 1.5 * sin(30) + (nrows + 2) * size * sin(30) / 2, 
        size,
        (1 - i / nrows) * 0.5
    )))
    }
  </>
  );

  yield* all(
    sequence( 0.01, ...polys.map((poly, index) => poly.scale(1, 2))),
    chain(
      waitFor(1),
      sequence( 0.01, ...polys.map((poly, index) => {
        const opacity = (1 - index / polys.length) * 0.8;
        return all(
          poly.fill(Posit.teal, 2),
          poly.opacity(opacity, 2)
        );
      })),
      ),

  );
    
});
