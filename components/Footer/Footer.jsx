import Link from 'next/link';

import { Box, Typography } from '@mui/material';

import { Logo, Layout } from '../index';

const Footer = ({ links }) => {
  return (
    <Box sx={{ backgroundColor: '#fff', padding: '2rem 0', marginTop: '10rem' }}>
      <Layout>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Logo />
            <Typography variant="theme-p2">{`Copyright © ${new Date().getFullYear()}`}</Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {links.map((link) => (
              <Link key={link.id} href={`/${link.slug}`} passHref>
                <Typography ml="1rem" variant="theme-link-m">
                  {link.title}
                </Typography>
              </Link>
            ))}
          </Box>
          <Box>Social</Box>
        </Box>
      </Layout>
    </Box>
  );
};

export default Footer;
