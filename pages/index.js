import { fetchApi } from '../helpers/fetchApi';
import { postsQuery } from '../helpers/queryLists';

import { PostsSlickSlider, Separator, Hero, ButtonLink, Banner } from '../components/index';

const Home = ({ allPosts }) => {
  const slickSliderPosts = allPosts.slice(0, 5);
  const featuredPosts = allPosts.filter((post) => post.categories.nodes.some((cat) => cat.name.includes('featured')));
  const bannerPosts = allPosts.filter((post) => post.categories.nodes.some((cat) => cat.name.includes('banner')));

  return (
    <>
      <ButtonLink />
      <Separator />
      <Hero posts={featuredPosts} />
      <Separator />
      {bannerPosts.length > 0 && <Banner bannerData={bannerPosts[0]} buttonText="Read more" textPosition="right" />}
      <Separator />
      <PostsSlickSlider posts={slickSliderPosts} />
      <Separator />
      {bannerPosts.length > 1 && <Banner bannerData={bannerPosts[1]} buttonText="Read more" textPosition="left" />}
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const allPosts = await fetchApi(postsQuery.call(this, null));

  return {
    props: {
      allPosts: allPosts.posts.nodes,
    },
    revalidate: 60,
  };
};
