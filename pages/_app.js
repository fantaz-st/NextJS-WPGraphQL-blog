import { useEffect } from 'react';

import { useRouter } from 'next/router';
import '../styles/globals.css';
import '../styles/reset.css';
import '../styles/nprogress.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/CardList.Slider.css';

import { ThemeProvider } from '@mui/material/styles';

import customTheme from '../styles/theme/theme';

import Navbar from '../components/Header/Navbar/Navbar';
import Separator from '../components/Separator/Separator';
import Footer from '../components/Footer/Footer';

import NProgress from 'nprogress';

const pagesArr = [
  { id: '1', slug: '', title: 'Home' },
  { id: '2', slug: 'posts', title: 'All Posts' },
  { id: '3', slug: 'categories', title: 'Categories' },
  // { id: '4', slug: 'authors', title: 'Authors' },
  { id: '4', slug: 'contact', title: 'Contact' },
];

function MyApp({ Component, pageProps }) {
  const router = useRouter();

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
    <ThemeProvider theme={customTheme}>
      <Navbar pages={pagesArr} />
      <Separator />
      <Component {...pageProps} />
      <Footer links={pagesArr} />
    </ThemeProvider>
  );
}

export default MyApp;
