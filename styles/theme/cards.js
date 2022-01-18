const cardBase = {
  borderRadius: '1rem',
  transition: `
transform 250ms ease,
box-shadow 250ms ease,
color 250ms ease
`,
  boxShadow: `1px 1px 5px 0 rgba(1,1,1,.05)`,
  '&:hover': {
    transform: `translateY(-0.25rem)`,
    boxShadow: `
      0px 2px 4px rgba(46,41,51,0.08),
      0px 5px 10px rgba(71,63,79,0.16)
    `,
  },
};

export const cards = [
  {
    props: { variant: 'post-slick' },
    style: {
      ...cardBase,
      flex: '1 0 calc(33.33% - 3rem)',
      padding: '0.5rem',
      height: '100%',
    },
  },
  {
    props: { variant: 'post-page' },
    style: {
      ...cardBase,
      flex: '1 0 calc(33.33% - 3rem)',
      padding: '0.5rem',
    },
  },
  {
    props: { variant: 'link' },
    style: {
      ...cardBase,
      padding: '2rem',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      userSelect: 'none',
      cursor: 'pointer',
      width: '100%',
    },
  },
  {
    props: { variant: 'card-hero' },
    style: {
      backgroundColor: 'transparent',
      flexGrow: '0',
      flexShrink: '0',
      width: '33.333%',
      display: 'block',
    },
  },
  {
    props: { variant: 'article' },
    style: { padding: '4rem', borderRadius: '1rem', boxShadow: '1px 1px 5px 0 rgba(1,1,1,.05)' },
  },
  {
    props: { variant: 'toc' },
    style: { padding: '2rem 4rem', borderRadius: '1rem', boxShadow: '1px 1px 5px 0 rgba(1,1,1,.05)' },
  },
];
