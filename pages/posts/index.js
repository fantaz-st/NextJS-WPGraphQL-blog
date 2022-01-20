import { useEffect, useState } from 'react';

import useHttp from '../../hooks/useFetch';

//

import { fetchApi } from '../../helpers/fetchApi';
import { postsQuery } from '../../helpers/queryLists';

//

import { Box, Button, Typography } from '@mui/material';
import Layout from '../../components/Layout/Layout';

import PostCard from '../../components/Card/PostCard';

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
          {posts.map((post) => (
            <PostCard key={post.id} display="post-page" post={post} cardVariant="post-page" />
          ))}
        </Box>
        {error && <p>Error fetching post data</p>}
        {loading && <p>Loading...</p>}
        {!loading && canLoadMorePosts && <Button onClick={loadMoreHandler}>Load more</Button>}
        {!canLoadMorePosts && <p>No more posts to load.</p>}
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
