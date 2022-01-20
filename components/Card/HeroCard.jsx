import Link from 'next/link';
import Image from 'next/image';
import { Box, Button, Card, CardMedia, Typography } from '@mui/material';

import { Layout } from '../index';

const HeroCard = ({ post: { slug, title, excerpt, categories, featuredImage } }) => {
  return (
    <Layout>
      <Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'column-reverse', md: 'row', lg: 'row' }, gap: '3rem' }}>
          <Box
            sx={{
              flexGrow: '0',
              flexShrink: '0',
              width: '66.666%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <Box>
              {categories.nodes.map((category) => (
                <Link key={category.name} href={`/category/${category.slug}`} passHref>
                  <Typography variant="theme-link-button" sx={{ marginRight: '1rem', marginBottom: '1rem' }}>
                    <a style={{ textDecoration: 'none' }}>{category.name}</a>
                  </Typography>
                </Link>
              ))}
            </Box>
            <Link href={`/posts/${slug}`} passHref>
              <a style={{ textDecoration: 'none' }}>
                <Typography variant="theme-h1">{title}</Typography>
              </a>
            </Link>
            <Typography variant="theme-p1">
              <Box dangerouslySetInnerHTML={{ __html: excerpt }} />
            </Typography>
          </Box>
          <Card variant="card-hero">
            <a href={`/posts/${slug}`}>
              <CardMedia
                variant="cb-image-before"
                component="img"
                image={featuredImage?.node?.sourceUrl}
                alt={title}
                sx={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center', maxHeight: '470px', maxWidth: '360px' }}
              />
              {/* <Image src={featuredImage?.node?.sourceUrl} alt={title} objectFit="cover" width={3} height={4} layout="responsive" quality={100} /> */}
            </a>
          </Card>
        </Box>
      </Box>
    </Layout>
  );
};

export default HeroCard;

{
  /* <Image className="objectPositionCenter" src={heroImage} alt="hero beast mode bla" height="450px" width="350px" objectFit="cover" /> */
}
