import { Box, Typography } from '@mui/material';
import Layout from '../../components/Layout/Layout';

import { fetchApi } from '../../helpers/fetchApi';
import { altHomeQuery } from '../../helpers/queryLists';

import PostContent from '../../components/Post/PostContent/PostContent';

const AllPosts = ({ content }) => {
  console.log(content.pageBy);
  return (
    <>
      <Layout>
        <Typography variant="theme-h2">All Posts</Typography>
        <PostContent content={content.pageBy.content} />
      </Layout>
    </>
  );
};

export default AllPosts;

export const getStaticProps = async () => {
  const content = await fetchApi(altHomeQuery);

  return {
    props: {
      content,
    },
  };
};
