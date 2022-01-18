import { Typography, Box } from '@mui/material';
import Layout from '../../components/Layout/Layout';
import { fetchApi } from '../../helpers/fetchApi';

import PostCard from '../../components/Card/PostCard';
import AuthorCard from '../../components/Card/AuthorCard';

import Separator from '../../components/Separator/Separator';

import { searchQuery, allUsersCategoriesPostsQuery } from '../../helpers/queryLists';

const SearchResultsPage = ({ data: { posts, users }, searchTerm }) => {
  return (
    <>
      <Layout>
        {users.nodes && users.nodes.length > 0 && (
          <>
            <Typography variant="theme-h2">{`Users matching "${searchTerm}"`}</Typography>
            {users.nodes.map((author) => (
              <AuthorCard key={author.id} author={author} />
            ))}
          </>
        )}
        <Separator />
        {posts.nodes && posts.nodes.length > 0 && (
          <>
            <Typography variant="theme-h2">{`Posts matching "${searchTerm}"`}</Typography>
            <Box sx={{ display: 'grid', gridGap: '0.5rem', gridTemplateColumns: 'repeat(3,1fr)' }}>
              {posts.nodes.map((post) => (
                <PostCard key={post.id} display="post-page" post={post} cardVariant="post-page" />
              ))}
            </Box>
          </>
        )}
      </Layout>
    </>
  );
};

export default SearchResultsPage;

export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  const { slug } = params;

  const query = searchQuery(slug);
  const searchData = await fetchApi(query);

  return {
    props: {
      data: searchData,
      searchTerm: slug,
    },
  };
};

export const getStaticPaths = async () => {
  const allSlugs = await fetchApi(allUsersCategoriesPostsQuery);

  const postsSlugsArray = allSlugs.posts.nodes.map((slug) => `/search/${slug.slug}`);
  const usersSlugsArray = allSlugs.users.nodes.map((slug) => `/search/${slug.slug}`);

  const slugArray = [...postsSlugsArray, ...usersSlugsArray];

  return {
    paths: slugArray || [],
    fallback: true,
  };
};
