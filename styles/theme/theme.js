import { createTheme } from '@mui/material/styles';
import { typography } from './typography';
import { cardMedia } from './cardMedia';
import { cards } from './cards';
import { buttons } from './buttons';
import { breakpoints } from './breakpoints';

export const base = createTheme({
  breakpoints: breakpoints,
  components: {
    MuiButton: {
      variants: buttons,
    },
    MuiCard: {
      variants: cards,
    },
    MuiCardMedia: {
      variants: cardMedia,
    },
    MuiTypography: {
      variants: typography,
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#26a27b',
    },
    secondary: {
      main: '#fafafa',
    },
    backgroundColor: 'red',
  },
});

export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#fafafa',
    },
    secondary: {
      main: '#26a27b',
    },
  },
});
