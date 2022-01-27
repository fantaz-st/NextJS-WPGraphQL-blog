import { fetchApi } from '../../helpers/fetchApi';
import { allPostsFromAuthorQuery, allUsersID } from '../../helpers/queryLists';

import Layout from '../../components/Layout/Layout';
import { Typography, Box } from '@mui/material';
import Separator from '../../components/Separator/Separator';
import PostCard from '../../components/Card/PostCard';

import AuthorCard from '../../components/Card/AuthorCard';

const Author = ({ data }) => {
  return (
    <>
      <Layout>
        <AuthorCard author={data} />
        <Separator />
        <Typography variant="theme-h4">Published by author</Typography>
        <Box mt="2rem" sx={{ display: 'grid', gridGap: '0.5rem', gridTemplateColumns: 'repeat(3,1fr)' }}>
          {data.posts.nodes.map((post) => (
            <PostCard key={post.id} display="post-page" post={post} cardVariant="post-page" />
          ))}
        </Box>
      </Layout>
    </>
  );
};

export default Author;

export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  const { slug } = params;

  const query = allPostsFromAuthorQuery(slug);
  const data = await fetchApi(query);

  return {
    props: {
      data: data.user,
    },
  };
};

export const getStaticPaths = async () => {
  const allIDs = await fetchApi(allUsersID);

  const IDsArray = allIDs.users.nodes.map((user) => `/author/${user.id}`);

  return {
    paths: IDsArray || [],
    fallback: true,
  };
};
