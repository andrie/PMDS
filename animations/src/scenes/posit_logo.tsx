import {makeScene2D, Circle, Polygon, Path, Node, Layout, PathProps, Txt, Img} from '@motion-canvas/2d';
import {all, chain, delay, createRef, createRefMap, waitFor, waitUntil, linear} from '@motion-canvas/core';

import { Posit } from '../styles';
import positLogo from '../../images/posit-logo.png';


function pointsToPath(points: number[][]) {
  let path = 'M ' + points[0][0] + ' ' + points[0][1];
  for (let i = 1; i < points.length; i++) {
    path += ' L ' + points[i][0] + ' ' + points[i][1];
  }
  return path;
}


function createChevronPath(size = 250) {
  const x = 260;
  const y = 250
  const w1 = 25;
  const w2 = 65;
  const points = [
    [0, -y/2],
    [x, -w1/2],
    [x, w1/2],
    [0, y/2],
    [0, y/2 - w2],
    [150, 0],
    [0, -y/2 + w2],
    [0, -y/2],
  ];
  return pointsToPath(points);
}

export default makeScene2D(function* (view) {
  
  const pLogo = createRef<Layout>();
  const chevron = createRefMap<Path>();
  const rightChevron = createRef<Path>();
  const leftChevron = createRef<Path>();
  
  const txtPosit = createRef<Txt>();
  const rect_path = 'M 0 -125 L 50 -125 L 50 125 L 0 125 L 0 -125'

  view.add(
    <>
      {/* <Img src={positLogo} scale={0.5} x={460} opacity={0.4} /> */}
      <Node ref={pLogo} >
        <Path ref={chevron.left} position={[-50,   0]} scale={1}   stroke={Posit.gray} rotation={180} lineWidth={8} data={rect_path} />,
        <Path ref={chevron.right} position={[150,  0]} scale={1} stroke={Posit.gray} lineWidth={8} data={rect_path} />,
      </Node>
      {/* <Node >
        <Txt ref={txtPosit} text='' fill='#666' fontFamily='Open Sans' fontSize={150} />
      </Node> */}
    </>
  );


  yield* chain(
    all(
      // logo transforms from prompt to chevron
      chevron.right().data(createChevronPath(), 1),
      chevron.left().data(createChevronPath(), 1),      
    ),
    all(
      // logo changes position
      chevron.right().position.x(-100, 1),
      chevron.left().position.x(175, 1),
      chevron.left().stroke(Posit.orange, 2),
      chevron.right().stroke(Posit.blue, 2),
    ),
    all(
      // logo changes position
      pLogo().position(view.position().sub([100, 100]), 1),
      pLogo().scale(0.5, 1),
      // txtPosit().text('Posit', 2, linear),
    ),
    waitFor(1),
  )
});
