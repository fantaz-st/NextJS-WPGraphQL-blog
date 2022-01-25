import React, { useEffect, useContext } from 'react';

import ThemeContext from '../Store/theme-context';

import { useRouter } from 'next/router';

import Head from 'next/head';

import '../styles/globals.css';
import '../styles/reset.css';
import '../styles/nprogress.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/CardList.Slider.css';

import { ThemeProvider } from '@mui/material/styles';

import { base, darkTheme, lightTheme } from '../styles/theme/theme';

import { Navbar, Separator, Footer } from '../components/index';

import NProgress from 'nprogress';
import { ThemeContextProvider } from '../Store/theme-context';

const pagesArr = [
  { id: '1', slug: '', title: 'Home' },
  { id: '2', slug: 'posts', title: 'All Posts' },
  { id: '3', slug: 'categories', title: 'Categories' },
  // { id: '4', slug: 'authors', title: 'Authors' },
  { id: '4', slug: 'contact', title: 'Contact' },
];

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const ctx = useContext(ThemeContext);

  useEffect(() => {
    const handleStart = (url) => {
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);
  return (
    <ThemeContextProvider>
      <ThemeProvider theme={base}>
        <Head>
          <title>FANTAZ Blog exercise</title>
        </Head>
        <Navbar pages={pagesArr} />
        <Separator />
        <Component {...pageProps} />
        <Footer links={pagesArr} />
      </ThemeProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
