import Link from 'next/link';
import Image from 'next/image';
import { Box, Button, Card, CardMedia, Typography } from '@mui/material';

import CategoryButton from '../CategoryButton/CategoryButton';

const HeroCard = ({ post: { slug, title, excerpt, categories, featuredImage } }) => {
  return (
    <Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'column-reverse', md: 'row', lg: 'row' }, gap: '3rem' }}>
        <Box
          sx={{
            flexGrow: '0',
            flexShrink: '0',
            width: { md: '66.666%', xs: '100%' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Box>
            <Box>
              {categories.nodes.map((category) => (
                <CategoryButton key={category.name} name={category.name} slug={category.slug} />
              ))}
            </Box>
            <Link href={`/posts/${slug}`} passHref>
              <a style={{ textDecoration: 'none' }}>
                <Typography variant="theme-h1" sx={{ fontSize: { md: '3rem', xs: '1.5rem' } }}>
                  {title}
                </Typography>
              </a>
            </Link>
            <Typography variant="theme-p1" sx={{ display: { md: 'block', xs: 'none' } }}>
              <Box dangerouslySetInnerHTML={{ __html: excerpt }} />
            </Typography>
          </Box>
        </Box>
        <Card variant="card-hero" sx={{ display: 'flex', justifyContent: 'center' }}>
          <a href={`/posts/${slug}`}>
            <CardMedia
              variant="cb-image-before"
              component="img"
              image={featuredImage?.node?.sourceUrl}
              alt={title}
              sx={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                maxHeight: { md: '470px', xs: '360px' },
                maxWidth: '360px',
              }}
            />
            {/* <Image src={featuredImage?.node?.sourceUrl} alt={title} objectFit="cover" width={3} height={4} layout="responsive" quality={100} /> */}
          </a>
        </Card>
      </Box>
    </Box>
  );
};

export default HeroCard;

{
  /* <Image className="objectPositionCenter" src={heroImage} alt="hero beast mode bla" height="450px" width="350px" objectFit="cover" /> */
}
