import { createTheme } from '@mui/material/styles';
import { typography } from './typography';
import { cardMedia } from './cardMedia';
import { cards } from './cards';
import { buttons } from './buttons';

const customTheme = createTheme({
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

export default customTheme;
