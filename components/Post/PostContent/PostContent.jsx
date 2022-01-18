import { Box, Card } from '@mui/material';

import classes from './PostContent.module.css';
const PostContent = ({ content }) => {
  return (
    <Card variant="article">
      <Box className={classes.content} dangerouslySetInnerHTML={{ __html: content }} />
    </Card>
  );
};

export default PostContent;
