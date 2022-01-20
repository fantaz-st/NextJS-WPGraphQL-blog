import { fetchApi } from '../helpers/fetchApi';
import { postsQuery, featuredPostsQuery, allBannersQuery } from '../helpers/queryLists';

import PostsSlickSlider from '../components/PostsSlickSlider/PostsSlickSlider';
import Separator from '../components/Separator/Separator';
import Hero from '../components/Hero/Hero/Hero';
import ButtonLink from '../components/Links/ButtonLink';
import Banner from '../components/Banner/Banner';

const Home = ({ posts, featured, banner }) => {
  return (
    <>
      <ButtonLink />
      <Separator />
      <Hero posts={featured} />
      <Separator />
      {banner.length > 0 && <Banner bannerData={banner[0]} buttonText="Read more" textPosition="right" />}
      <Separator />
      <PostsSlickSlider posts={posts} />
      <Separator />
      {banner.length > 1 && <Banner bannerData={banner[1]} buttonText="Read more" textPosition="left" />}
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const allPosts = await fetchApi(postsQuery.call(this, 5));
  const featuredPosts = await fetchApi(featuredPostsQuery);
  const banner = await fetchApi(allBannersQuery);

  return {
    props: {
      posts: allPosts.posts.nodes,
      featured: featuredPosts.posts.nodes,
      banner: banner.posts.nodes,
    },
    revalidate: 60,
  };
};
