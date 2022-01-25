import { useEffect, useState } from 'react';

import useHttp from '../../hooks/useFetch';

//

import { fetchApi } from '../../helpers/fetchApi';
import { postsQuery } from '../../helpers/queryLists';

//

import { Box, Grid, Button, Typography } from '@mui/material';
import Layout from '../../components/Layout/Layout';

import PostCard from '../../components/Card/PostCard';
import Separator from '../../components/Separator/Separator';

const AllPosts = ({ allPosts, endCursor, loadMore }) => {
  const [posts, setPosts] = useState(allPosts);
  const [endCursorVal, setEndCursorVal] = useState(endCursor);
  const [canLoadMorePosts, setCanLoadMorePosts] = useState(loadMore);

  const { error, sendRequest: fetchMorePosts, fetchData, loading } = useHttp();

  const loadMorePostsData = fetchData?.posts?.nodes;

  useEffect(() => {
    if (!loadMorePostsData) return;

    setPosts((oldVal) => [...oldVal, ...fetchData.posts.nodes]);
    setEndCursorVal(fetchData.posts.pageInfo.endCursor);
    setCanLoadMorePosts(fetchData.posts.pageInfo.hasNextPage);
  }, [loadMorePostsData, fetchData]);

  const loadMoreHandler = async () => {
    fetchMorePosts(postsQuery.call(this, 3, endCursorVal));
  };

  return (
    <>
      <Layout>
        <Typography variant="theme-h2">All Posts</Typography>
        {/* <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '1rem' }}> */}
        <Box sx={{ display: 'grid', gridGap: '0.5rem', gridTemplateColumns: { lg: 'repeat(3,1fr)', md: 'repeat(2,1fr)' } }}>
          {/* <Grid container spacing={3}> */}
          {posts.map((post) => (
            <PostCard key={post.id} display="post-page" post={post} cardVariant="post-page" />
          ))}
          {/* </Grid> */}
        </Box>
        <Separator />
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          {error && <Typography variant="theme-p3">Error fetching post data</Typography>}
          {loading && <Typography variant="theme-p3">Loading...</Typography>}
          {!loading && canLoadMorePosts && (
            <Button variant="cb-contained" onClick={loadMoreHandler}>
              Load more
            </Button>
          )}
          {!canLoadMorePosts && <Typography variant="theme-p3">No more posts to load 😞</Typography>}
        </Box>
      </Layout>
    </>
  );
};

export default AllPosts;

export const getStaticProps = async () => {
  const allPosts = await fetchApi(postsQuery.call(this, 3));

  return {
    props: {
      allPosts: allPosts.posts.nodes,
      endCursor: allPosts.posts.pageInfo.endCursor,
      loadMore: allPosts.posts.pageInfo.hasNextPage,
    },
  };
};
