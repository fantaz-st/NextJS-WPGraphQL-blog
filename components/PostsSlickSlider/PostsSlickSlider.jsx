import Slider from 'react-slick';

import { postSlickSliderSettings } from '../../helpers/settings';
import { Typography } from '@mui/material';

import { PostCard, Layout, Separator } from '../index';

const PostsSlickSlider = ({ posts }) => {
  return (
    <Layout>
      <Typography variant="theme-h3">Newest posts</Typography>
      <Separator />
      <Slider {...postSlickSliderSettings}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} cardVariant="post-slick" />
        ))}
      </Slider>
    </Layout>
  );
};

export default PostsSlickSlider;
