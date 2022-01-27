import Link from 'next/link';
import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';
import { CategoryButton } from '../index';

import classes from './HeroCard.module.css';

const HeroCard = ({ post: { slug, title, excerpt, categories, featuredImage } }) => {
  return (
    <Container className={classes['hero-flex-container']}>
      <Box className={classes['hero-text']}>
        <Box className={classes['hero-categories']}>
          {categories.nodes.map((category) => (
            <CategoryButton key={category.name} name={category.name} slug={category.slug} />
          ))}
        </Box>
        <Link href={`/posts/${slug}`} passHref>
          <a style={{ textDecoration: 'none' }}>
            <Typography variant="theme-h1" sx={{ fontSize: { md: '3rem', xs: '1.5rem' }, lineHeight: { md: '3.8rem', xs: '1.8rem' } }}>
              {title}
            </Typography>
          </a>
        </Link>
        <Typography variant="theme-p1" sx={{ display: { md: 'block', xs: 'none' } }}>
          <Box dangerouslySetInnerHTML={{ __html: excerpt }} />
        </Typography>
      </Box>
      <Box className={classes['hero-image']}>
        <Box className={classes['hero-image-container']}>
          <Image src={featuredImage?.node?.sourceUrl} alt={title} objectFit="cover" width={3} height={4} layout="responsive" quality={100} />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroCard;
