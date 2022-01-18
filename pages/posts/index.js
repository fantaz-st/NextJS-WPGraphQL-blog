import { Box, Typography } from '@mui/material';
import Layout from '../../components/Layout/Layout';

import { fetchApi } from '../../helpers/fetchApi';
import { allPostsQuery } from '../../helpers/queryLists';

import PostCard from '../../components/Card/PostCard';

const AllPosts = ({ allPosts }) => {
  return (
    <>
      <Layout>
        <Typography variant="theme-h2">All Posts</Typography>
        {/* <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '1rem' }}> */}
        <Box sx={{ display: 'grid', gridGap: '0.5rem', gridTemplateColumns: { lg: 'repeat(3,1fr)', md: 'repeat(2,1fr)' } }}>
          {allPosts.map((post) => (
            <PostCard key={post.id} display="post-page" post={post} cardVariant="post-page" />
          ))}
        </Box>
      </Layout>
    </>
  );
};

export default AllPosts;

export const getStaticProps = async () => {
  const allPosts = await fetchApi(allPostsQuery);

  return {
    props: {
      allPosts: allPosts.posts.nodes,
    },
  };
};
