import { indigo, gray, blue, white } from './colors';

const heading = {
  display: 'block',
  color: gray[800],
  fontWeight: 'bold',
  fontFamily: ['Montserrat', 'sans-serif'],
};

const body = {
  color: gray[600],
  fontWeight: '400',
  fontFamily: ['Montserrat', 'sans-serif'],
};

const link = {
  fontFamily: ['Montserrat', 'sans-serif'],
  cursor: 'pointer',
  '&:hover': {
    color: indigo[500],
  },
};

export const typography = [
  {
    props: { variant: 'theme-h1' },
    style: {
      ...heading,
      fontSize: '3.6rem',
      lineHeight: '4rem',
      marginBottom: '2rem',
    },
  },
  {
    props: { variant: 'theme-h2' },
    style: {
      ...heading,
      fontSize: '3rem',
      lineHeight: '3.6rem',
      marginBottom: '2rem',
    },
  },

  {
    props: { variant: 'theme-h3' },
    style: {
      ...heading,
      fontSize: '1.5rem',
    },
  },
  {
    props: { variant: 'theme-h3-banner' },
    style: {
      ...heading,
      color: '#fff',
      fontSize: '1.5rem',
      textShadow: `0px 4px 3px rgba(0,0,0,0.4),
      0px 8px 13px rgba(0,0,0,0.1),
      0px 18px 23px rgba(0,0,0,0.1)`,
    },
  },
  {
    props: { variant: 'theme-h4' },
    style: {
      ...heading,
      fontSize: '1.25rem',
      lineHeight: '1.33rem',
    },
  },

  {
    props: { variant: 'theme-p1' },
    style: {
      ...body,
      fontSize: '1.25rem',
      lineHeight: '1.8rem',
    },
  },
  {
    props: { variant: 'theme-p2' },
    style: {
      ...body,
      fontSize: '1.25rem',
      lineHeight: '1.4rem',
    },
  },
  {
    props: { variant: 'theme-p3' },
    style: {
      ...body,
      fontSize: '0.875rem',
      lineHeight: '1.8rem',
      fontWeight: 'normal',
      fontFamily: ['Montserrat', 'sans-serif'],
    },
  },
  {
    props: { variant: 'theme-link-l' },
    style: {
      ...link,
      color: indigo[500],
      fontWeight: '700',
      fontSize: '1.4rem',
    },
  },
  {
    props: { variant: 'theme-link-m' },
    style: {
      ...link,
      color: gray[600],
      fontWeight: '700',
      fontSize: '1rem',
    },
  },
  {
    props: { variant: 'theme-link-m-alt' },
    style: {
      ...link,
      color: gray[800],
      fontWeight: '600',
      fontSize: '1rem',
    },
  },
  {
    props: { variant: 'theme-link-s' },
    style: {
      ...link,
      color: gray[600],
      fontWeight: '700',
      fontSize: '0.875rem',
    },
  },
  {
    props: { variant: 'theme-link-button' },
    style: {
      ...link,
      display: 'inline-block',
      textTransform: 'capitalize',
      fontSize: '1rem',
      fontWeight: '600',
      borderRadius: '0.5rem',
      color: gray[800],
      backgroundColor: blue[200],
      padding: '0.5rem 1rem',
      '&:hover': {
        backgroundColor: gray[500],
        color: white,
      },
    },
  },
];
