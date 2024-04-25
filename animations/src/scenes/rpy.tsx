import {makeScene2D} from '@motion-canvas/2d';
import {Node, Circle, Polygon, Txt, Layout, Icon } from '@motion-canvas/2d/lib/components';
import {delay, waitFor, waitUntil} from '@motion-canvas/core/lib/flow';
import {createRef, makeRef, range, useRandom} from '@motion-canvas/core/lib/utils';
import {all, chain, sequence} from '@motion-canvas/core/lib/flow';
import { Colors, Posit } from '../styles';

export default makeScene2D(function* (view) {
    const iconRef = createRef<Icon>();
  view.add(
  <>
    <Txt  fill={Posit.blue}>R and Python</Txt>
    <Icon
          ref={iconRef}
          icon="fa6-brands:r-project"
          position={[-100, 100]}
          fontSize={100}
          size={100}
          color={Posit.gray}
        ></Icon>
    <Icon
          ref={iconRef}
          icon="fa6-brands:python"
          position={[100, 100]}
          fontSize={100}
          size={100}
          color={Posit.gray}
        ></Icon>

  </>
  );

//   yield* all(
    
//   );
    
});