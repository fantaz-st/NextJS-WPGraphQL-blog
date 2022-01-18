import { gray, blue, white } from './colors';

export const buttons = [
  {
    props: { variant: 'cb-contained' },
    style: {
      backgroundColor: 'red',
      fontSize: '0.75rem',
      fontWeight: '600',
      borderRadius: '0.5rem',
      color: gray[800],
      backgroundColor: blue[200],
      padding: '0.25rem 1rem',
      '&:hover': {
        backgroundColor: gray[500],
        color: white,
      },
    },
  },
];
