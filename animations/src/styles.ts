export const Colors = {
  whiteLabel: 'rgba(255, 255, 255, 0.54)',
  blackLabel: 'rgba(0, 0, 0, 0.87)',
  background: '#141414',
  surface: '#242424',
  surfaceLight: '#c0b3a3',

  KEYWORD: '#ff6470',
  TEXT: '#ACB3BF',
  FUNCTION: '#ffc66d',
  STRING: '#99C47A',
  NUMBER: '#68ABDF',
  PROPERTY: '#AC7BB5',
  COMMENT: '#808586',

  red: '#ef5350',
  green: '#8bc34a',
  blue: '#2196f3',
  white: '#ffffff',
  black: '#000000',
};


export const Posit = {
  // primary
  blue:  '#447099',
  orange:  '#EE6331',
  gray:  '#404041',
  white:  '#FFFFFF',
  // secondary / accent
  teal:   '#419599',
  green:  '#72994E',
  burgundy:  '#9A4665', 
}


// LIGHT BLUE 1 #D1DBE5
// LIGHT BLUE 2 #A2B8CB
// LIGHT BLUE 3 #7494B1

// Posit Blue #447099
// Dark Blue 1 #305775
// Dark Blue 2 #213D4F
// Dark Blue 3 #17212B

// Light Gray 3 #707073
// Posit Gray #404041

// Dark Gray 1 #333333
// Dark Gray 2 #242426
// Dark Gray 3 #151515

export const BaseFont = {
  fontFamily: 'Open Sans',
  fontWeight: 700,
  fontSize: 28,
};

export const WhiteLabel = {
  ...BaseFont,
  fill: Colors.whiteLabel,
};

export const BlackLabel = {
  ...BaseFont,
  fill: Colors.blackLabel,
};
