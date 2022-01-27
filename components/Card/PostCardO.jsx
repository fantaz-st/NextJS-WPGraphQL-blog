import React from 'react';

import { Card, Typography, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import profilePicture from '../../assets/images/cb_profile.jpg';

import { truncateString, postDate } from '../../helpers/utils';

const PostCard = ({ post: { date, title, slug, featuredImage, excerpt, author }, cardVariant }) => {
  const { displayDate, displayWeekday } = postDate(date);

  let theAuthor;

  if (author.node.firstName && author.node.lastName) {
    theAuthor = `${author.node.firstName} ${author.node.lastName}`;
  } else {
    theAuthor = author.node.name;
  }

  return (
    <Card
      variant={cardVariant}
      sx={{
        display: `${cardVariant === 'post-page' ? 'flex' : ''}`,
        flexDirection: {
          lg: `${cardVariant === 'post-page' ? 'column' : 'row'}`,
          md: `${cardVariant === 'post-page' ? 'column' : 'row'}`,
          sm: `${cardVariant === 'post-page' ? 'row' : 'column'}`,
        },
      }}
    >
      <Box sx={{ borderRadius: '0.5rem', overflow: 'hidden' }}>
        <Image
          src={featuredImage?.node?.sourceUrl}
          alt={title}
          objectFit="cover"
          width={5}
          height={3}
          layout="responsive"
          quality={100}
          loading="lazy"
        />
      </Box>
      <Box sx={{ marginTop: '1rem', padding: '0.5rem 1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Link href={`/posts/${slug}`} passHref>
          <a style={{ textDecoration: 'none' }}>
            <Typography gutterBottom variant="theme-h4" component="div">
              {title}
            </Typography>
          </a>
        </Link>

        <Typography
          variant="theme-p3"
          sx={{
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

        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem', marginTop: '1rem' }}>
          <Box sx={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden' }}>
            <Image src={profilePicture} height="60px" width="60px" alt="user profile" />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Link href={`/author/${author.node.id}`} passHref>
              <a>
                <Typography gutterBottom variant="theme-link-m" sx={{ textDecoration: 'none' }}>
                  {theAuthor}
                </Typography>
              </a>
            </Link>
            <Typography gutterBottom variant="theme-p3" component="div">
              {`${displayWeekday}, ${displayDate}`}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default PostCard;
