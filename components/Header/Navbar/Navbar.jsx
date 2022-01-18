import { AppBar, Box, Typography, Container } from '@mui/material';
import Logo from '../Logo/Logo';

import Link from 'next/link';
import Search from '../Search/Search';

import { useState } from 'react';
import Checkbox from './Checkbox';
import Layout from '../../Layout/Layout';

const Navbar = ({ pages }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', boxShadow: 'none' }}>
      <Container maxWidth="xl" sx={{ py: '2rem', height: '7rem' }}>
        <Layout>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ flexBasis: '25%', display: 'flex' }}>
              <Link href="/" passHref>
                <Logo websiteName="FANTAZ's blog" />
              </Link>
            </Box>
            <Box sx={{ flexBasis: '35%', display: { xs: 'none', md: 'flex' } }}>
              <Search />
            </Box>
            <Box sx={{ flexBasis: '40%', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'flex-end', gap: '2rem' }}>
              <Box sx={{ display: 'flex' }}>
                {pages.map((page) => (
                  <Link key={page.id} href={`/${page.slug}`} passHref>
                    <Typography ml="1rem" variant="theme-link-m">
                      {page.title}
                    </Typography>
                  </Link>
                ))}
              </Box>
              <Checkbox />
            </Box>
          </Box>
        </Layout>
      </Container>
    </AppBar>
  );
};

export default Navbar;
