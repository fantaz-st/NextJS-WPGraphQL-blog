import { Box, Card, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { Layout } from '../index';

const AuthorCard = ({ author }) => {
  return (
    <Layout>
      <Card variant="toc">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <Box>
            <Image height="90px" width="90px" src={author.avatar.url} alt={author.firstname} />
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', flexBasis: '60%' }}>
            <Link href={`/author/${author.id}`} passHref>
              <Typography variant="theme-link-l">{`${author.firstName} ${author.lastName}`}</Typography>
            </Link>
            <Typography mt="1rem" variant="theme-p2">
              {author.description}
            </Typography>
          </Box>
          <Box sx={{}}>
            {author.email && <Typography variant="theme-link-m">{author.email}</Typography>}
            {!author.email && <Typography variant="theme-link-m">cbabic@pfst.hr</Typography>}
          </Box>
        </Box>
      </Card>
    </Layout>
  );
};

export default AuthorCard;
