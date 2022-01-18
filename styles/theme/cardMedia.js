export const cardMedia = [
  {
    props: { variant: 'cb1' },
    style: {
      borderRadius: '0.5rem',
    },
  },
  {
    props: { variant: 'cb-image-before' },
    style: {
      position: 'relative',
      borderRadius: '0.5rem 3rem 3rem',
      '&::before, &::after': {
        content: `""`,
        backgroundColor: 'red',
        position: 'absolute',
        left: '-10px',
      },
      '::before': {
        top: -2,
        left: -2,
        size: `2/3`,
      },
      '::after': {
        bottom: -2,
        right: -2,
        size: 80,
        borderRadius: [`0`, `3rem 0`],
      },
    },
  },
];
