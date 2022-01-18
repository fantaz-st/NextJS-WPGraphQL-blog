import Slider from 'react-slick';

import PostCard from '../Card/PostCard';

import { postSlickSliderSettings } from '../../helpers/settings';
import Layout from '../Layout/Layout';
import { Typography } from '@mui/material';
import Separator from '../Separator/Separator';

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
