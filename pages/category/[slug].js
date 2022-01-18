import { allPostsFromCategory, allCategoriesQuery } from '../../helpers/queryLists';
import { fetchApi } from '../../helpers/fetchApi';

import Layout from '../../components/Layout/Layout';
import { Typography, Box } from '@mui/material';
import PostCard from '../../components/Card/PostCard';

const PostsByCategory = ({ posts, category }) => {
  return (
    <>
      <Layout>
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Typography variant="theme-h2" sx={{ textTransform: 'capitalize' }}>
            {category}
          </Typography>
          <Box
            sx={{
              backgroundColor: '#ffffff',
              height: '1rem',
              lineHeight: '1rem',
              textAlign: 'center',
              padding: '1rem',
              borderRadius: '0.75rem',
              boxShadow: `
      0px 2px 4px rgba(46,41,51,0.08),
      0px 5px 10px rgba(71,63,79,0.16)
    `,
            }}
          >
            <Typography
              variant="theme-h2"
              sx={{
                color: '#63b3ed',
                fontFamily: ['PT Serif', 'serif'],
                fontSize: '2rem',
                marginBottom: '0px',
                lineHeight: '1rem !important',
              }}
            >
              {posts.nodes.length}
            </Typography>
          </Box>
        </Box>
        {/* <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between' }}> */}
        <Box sx={{ display: 'grid', gridGap: '1rem', gridTemplateColumns: 'repeat(3,1fr)' }}>
          {posts.nodes.map((post) => (
            <PostCard key={post.id} display="post-page" post={post} cardVariant="post-page" />
          ))}
        </Box>
      </Layout>
      <Layout />
      <p></p>
    </>
  );
};

export default PostsByCategory;

export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  const { slug } = params;

  const query = allPostsFromCategory(slug);
  const data = await fetchApi(query);

  return {
    props: {
      category: slug,
      posts: data.posts,
    },
  };
};

export const getStaticPaths = async () => {
  const allCategories = await fetchApi(allCategoriesQuery);

  const categoryArray = allCategories.categories.nodes.map((category) => `/category/${category.slug}`);

  return {
    paths: categoryArray || [],
    fallback: true,
  };
};
