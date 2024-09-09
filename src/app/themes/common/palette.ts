import { colors } from '@mui/material';

const white = '#FFFFFF';
const black = '#000000';

const main = '#F25B24';

const secondary = colors.deepPurple[900];

export default {
  black,
  white,

  primary: {
    contrastText: white,
    main: main,
  },
  secondary: {
    contrastText: white,
    main: secondary,
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  info: {
    contrastText: white,
    dark: colors.yellow[900],
    main: colors.yellow[600],
    light: colors.yellow[400]
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: white,
    secondary: black,
    link: colors.blue[600],
  },
  background: {
    default: '#130F26',
    paper: white
  },
};
