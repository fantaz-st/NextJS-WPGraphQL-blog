import Slider from 'react-slick';

import { heroSlickSliderSettings } from '../../helpers/settings';

import { HeroCard } from '../index';

const Hero = ({ posts }) => {
  return (
    <Slider {...heroSlickSliderSettings}>
      {posts.map((post) => (
        <HeroCard key={post.id} post={post} />
      ))}
    </Slider>
  );
};

export default Hero;
