import Slider from 'react-slick';

import { postSlickSliderSettings } from '../../helpers/settings';
import { Typography } from '@mui/material';

import { PostCard, Separator } from '../index';

const PostsSlickSlider = ({ posts }) => {
  return (
    <>
      <Typography variant="theme-h3">Newest posts</Typography>
      <Separator />
      <Slider {...postSlickSliderSettings}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} cardVariant="post-slick" />
        ))}
      </Slider>
    </>
  );
};

export default PostsSlickSlider;
