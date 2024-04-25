import {makeProject} from '@motion-canvas/core';

import quarto_mc from './scenes/quarto_mc?scene';

// import global styles
import '../global.css';

export default makeProject({
  scenes: [quarto_mc],
});
