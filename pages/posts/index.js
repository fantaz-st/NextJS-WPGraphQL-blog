import { useEffect, useState } from 'react';

import useHttp from '../../hooks/useFetch';

//

import { fetchApi } from '../../helpers/fetchApi';
import { postsQuery } from '../../helpers/queryLists';

//

import { Box, Button, Typography } from '@mui/material';

import { PostCard, Separator, Layout } from '../../components';

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
    <Layout>
      <Typography variant="theme-h2">All Posts</Typography>
      <Box sx={{ display: 'grid', gridGap: '2rem 1rem', gridTemplateColumns: { md: 'repeat(3,1fr)', sm: 'repeat(2,1fr)' } }}>
        {/* <Grid container spacing={3}> */}
        {posts.map((post) => (
          <PostCard key={post.id} display="post-page" post={post} cardVariant="post-page" />
        ))}
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
  );
};

export default AllPosts;

export const getStaticProps = async () => {
  const allPosts = await fetchApi(postsQuery.call(this, 6));

  return {
    props: {
      allPosts: allPosts.posts.nodes,
      endCursor: allPosts.posts.pageInfo.endCursor,
      loadMore: allPosts.posts.pageInfo.hasNextPage,
    },
  };
};
