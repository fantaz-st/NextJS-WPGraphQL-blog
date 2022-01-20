import Link from 'next/link';
import Image from 'next/image';

import { Box, Typography, Card, Button } from '@mui/material';
import { Layout } from '../index';

const Banner = ({ bannerData: { featuredImage, title, excerpt, slug }, textPosition = 'right', buttonText }) => {
  return (
    <Layout>
      <Link href={`/posts/${slug}`} passHref>
        <a style={{ textDecoration: 'none' }}>
          <Card
            variant="banner"
            sx={{
              background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${featuredImage?.node?.sourceUrl})`,
              backgroundPosition: 'center',
              flexDirection: `${textPosition === 'right' ? 'row' : 'row-reverse'}`,
            }}
          >
            {/* <Image src={featuredImage?.node?.sourceUrl} alt={title} objectFit="cover" width={16} height={3} layout="responsive" quality={100} /> */}
            <Box sx={{ flexBasis: '50%' }}>
              <Typography variant="theme-h3-banner">{title}</Typography>
            </Box>
            <Button variant="contained" sx={{ flexGrow: '0' }}>
              {buttonText}
            </Button>
          </Card>
        </a>
      </Link>
    </Layout>
  );
};

export default Banner;
