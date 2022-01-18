import { Box, Typography, Button, Link } from '@mui/material';
import Image from 'next/image';

import profilePicture from '../../assets/images/cb_profile.jpg';

const PostHeader = ({ date, author, title, categories }) => {
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const weekdayOptions = { weekday: 'short' };

  const dateNow = new Date(date);

  const displayDate = dateNow.toLocaleDateString('hr-HR', dateOptions);
  const weekday = dateNow.toLocaleDateString('hr-HR', weekdayOptions);

  const displayWeekday = weekday[0].toUpperCase() + weekday.substring(1);

  let theAuthor;

  if (author.node.firstName && author.node.lastName) {
    theAuthor = `${author.node.firstName} ${author.node.lastName}`;
  } else {
    theAuthor = author.node.name;
  }
  return (
    <Box mt="4rem" mb="2rem" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
      <Box sx={{ display: 'block' }}>
        {categories.nodes.map((category) => (
          <Button key={category.name} size="medium" variant="cb-contained" sx={{ marginRight: '1rem', marginBottom: '1rem' }}>
            {category.name}
          </Button>
        ))}
      </Box>
      <Typography variant="theme-h2">{title}</Typography>
      <Box mt="0.5rem" sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
        <Box sx={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden' }}>
          <Image src={profilePicture} height="40px" width="40px" alt="user profile" />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Link href={`/author/${author.node.id}`} sx={{ textDecoration: 'none' }}>
            <Typography gutterBottom variant="theme-link-m">
              {theAuthor}
            </Typography>
          </Link>

          <Typography gutterBottom variant="theme-p3" component="div">
            {`${displayWeekday}, ${displayDate}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PostHeader;
