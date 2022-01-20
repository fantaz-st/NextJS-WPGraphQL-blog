import Slider from 'react-slick';

import { heroSlickSliderSettings } from '../../../helpers/settings';

import { HeroCard, Layout } from '../../index';

const HeroSlickSlider = ({ posts }) => {
  return (
    <Layout>
      <Slider {...heroSlickSliderSettings}>
        {posts.map((post) => (
          <HeroCard key={post.id} post={post} />
        ))}
      </Slider>
    </Layout>
  );
};

export default HeroSlickSlider;
