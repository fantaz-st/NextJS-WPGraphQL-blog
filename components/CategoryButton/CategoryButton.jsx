import Link from 'next/link';

import { Typography } from '@mui/material';

const categoryColor = (category) => {
  switch (category) {
    case 'featured':
      return '#f8f0be';
      break;
    case 'laptops':
      return '#c7acc1';
      break;
    case 'review':
      return '#f8bec6';
      break;
    case 'builds':
      return '##8fa7c4';
      break;
    case 'peripherals':
      return '#2e5e67';
      break;
    default:
      return '#bee3f8';
      break;
  }
};

const CategoryButton = ({ name, slug }) => {
  return (
    <Link key={name} href={`/category/${slug}`} passHref>
      <Typography variant="theme-link-button" sx={{ marginRight: '1rem', marginBottom: '1rem', backgroundColor: categoryColor(name) }}>
        <a style={{ textDecoration: 'none' }}>{name}</a>
      </Typography>
    </Link>
  );
};

export default CategoryButton;
