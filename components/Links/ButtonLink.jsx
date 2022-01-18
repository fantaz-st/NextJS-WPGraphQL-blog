import { Box, Typography, Card } from '@mui/material';
import Link from 'next/link';
import Layout from '../Layout/Layout';

import { BsNewspaper, BsFillBellFill, BsBook, BsExclamationCircle } from 'react-icons/bs';

const buttonList = [
  {
    name: 'All News',
    link: 'posts',
    icon: <BsNewspaper />,
  },
  {
    name: 'Featured',
    link: 'posts',
    icon: <BsBook />,
  },
  {
    name: 'Important',
    link: 'posts',
    icon: <BsFillBellFill />,
  },
  {
    name: 'Announcements',
    link: 'posts',
    icon: <BsExclamationCircle />,
  },
];

const ButtonLink = () => {
  return (
    <Layout>
      <Box mt="2rem" sx={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-between', gap: '1rem' }}>
        {buttonList.map((button) => (
          <Link href={`/${button.link}`} key={button.name} passHref>
            <Card variant="link">
              <Box mb="0.5rem" sx={{ fontSize: '1.8rem', color: '#667eea' }}>
                {button.icon}
              </Box>
              <Typography variant="theme-link-m">{button.name}</Typography>
            </Card>
          </Link>
        ))}
      </Box>
    </Layout>
  );
};

export default ButtonLink;
