import { fetchApi } from '../helpers/fetchApi';

import PostsSlickSlider from '../components/PostsSlickSlider/PostsSlickSlider';
import Separator from '../components/Separator/Separator';
import Hero from '../components/Hero/Hero/Hero';
import ButtonLink from '../components/Links/ButtonLink';
import { allPostsQuery, featuredPostsQuery } from '../helpers/queryLists';

const Home = ({ posts, featured }) => {
  return (
    <>
      <ButtonLink />
      <Separator />
      <Hero posts={featured} />
      <PostsSlickSlider posts={posts} />
      <Separator />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const allPosts = await fetchApi(allPostsQuery);
  const featuredPosts = await fetchApi(featuredPostsQuery);

  return {
    props: {
      posts: allPosts.posts.nodes,
      featured: featuredPosts.posts.nodes,
    },
    revalidate: 60,
  };
};
