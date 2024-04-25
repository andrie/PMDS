import {makeProject} from '@motion-canvas/core';

import pipeline from './scenes/pipeline?scene';

// import global styles
import '../global.css';

export default makeProject({
  scenes: [pipeline],
});
