import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';

import { AppBar, Box, Typography, Container, IconButton } from '@mui/material';

import { Logo, Search, /* Checkbox, */ Layout } from '../../index';
import { TiThMenu } from 'react-icons/ti';
import { BiSearch } from 'react-icons/bi';

import classes from './Navbar.module.css';

const Navbar = ({ pages }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => setMobileMenuOpen(false);

    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen((prevValue) => !prevValue);

  return (
    <>
      {mobileMenuOpen && (
        <Box className={classes.overlay}>
          <Box className={classes.menu}>
            <Search />
            {pages.map((page) => (
              <Link key={page.id} href={`/${page.slug}`} passHref>
                <Typography ml="1rem" variant="theme-link-l">
                  {page.title}
                </Typography>
              </Link>
            ))}
          </Box>
        </Box>
      )}

      <AppBar position="static" className={classes.navbar}>
        <Container maxWidth="xl" sx={{ py: '2rem', height: '7rem' }}>
          <Layout>
            <Box className={classes.content}>
              <Box>
                <Link href="/" passHref>
                  <Logo websiteName="FANTAZ's blog" />
                </Link>
              </Box>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Search />
              </Box>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'flex-end', gap: '2rem' }}>
                <Box sx={{ display: 'flex' }}>
                  {pages.map((page) => (
                    <Link key={page.id} href={`/${page.slug}`} passHref>
                      <Typography ml="1rem" variant="theme-link-m">
                        {page.title}
                      </Typography>
                    </Link>
                  ))}
                </Box>
                {/* <Checkbox /> */}
              </Box>
              <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: '1rem' }}>
                <IconButton aria-label="menu">
                  <BiSearch />
                </IconButton>
                <IconButton aria-label="menu" onClick={toggleMobileMenu}>
                  <TiThMenu />
                </IconButton>
              </Box>
            </Box>
          </Layout>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
