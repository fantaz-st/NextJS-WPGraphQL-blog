import React from 'react';

import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import profilePicture from '../../../assets/images/cb_profile.jpg';

import { truncateString, postDate, authorNameSurname } from '../../../helpers/utils';

import classes from './PostCard.module.css';

const PostCard = ({ post: { date, title, slug, featuredImage, excerpt, author }, cardVariant }) => {
  const { displayDate, displayWeekday } = postDate(date);

  const theAuthor = authorNameSurname(author);

  return (
    <Box className={classes['post-card-container']}>
      <Box className={classes['post-card-image']}>
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
      <Box className={classes['post-card-text']}>
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
        <Box className={classes['post-card-details']}>
          <Box className={classes['post-card-user']}>
            <Image src={profilePicture} height="60px" width="60px" alt="user profile" />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Link href={`/author/${author.node.id}`} passHref>
              <a style={{ textDecoration: 'none' }}>
                <Typography variant="theme-link-m">{theAuthor}</Typography>
              </a>
            </Link>
            <Typography variant="theme-p3">{`${displayWeekday}, ${displayDate}`}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PostCard;
