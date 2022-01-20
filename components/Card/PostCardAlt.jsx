import React from 'react';

import { Card, CardMedia, Typography, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import profilePicture from '../../assets/images/cb_profile.jpg';

const truncateString = (str, num) => {
  if (num > str.length) {
    return str;
  } else {
    str = str.substring(0, num);
    return str + '...';
  }
};

const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
const weekdayOptions = { weekday: 'short' };

const PostCardAlt = ({ post: { date, title, slug, featuredImage, excerpt, author }, cardVariant }) => {
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
    <Card variant={cardVariant}>
      <Box mb="2rem" sx={{ borderRadius: '0.5rem', overflow: 'hidden' }}>
        <Image src={featuredImage?.node?.sourceUrl} alt={title} objectFit="cover" width={5} height={3} layout="responsive" quality={100} />
      </Box>
      <Box sx={{ padding: '0 1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Link href={`/posts/${slug}`} passHref>
          <a style={{ textDecoration: 'none' }}>
            <Typography sx={{ flex: '1' }} variant="theme-h4">
              {title}
            </Typography>
          </a>
        </Link>

        <Typography
          variant="theme-p3"
          sx={{
            flex: '1',
            display: {
              lg: 'block',
              md: 'block',
              sm: 'block',
              xs: `${cardVariant === 'post-page' ? 'none' : 'block'}`,
            },
          }}
        >
          <Box dangerouslySetInnerHTML={{ __html: truncateString(excerpt, 90) }} />
        </Typography>
      </Box>
    </Card>
  );
};

export default PostCardAlt;
