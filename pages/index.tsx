import type { NextPage } from 'next';
import React, { useRef } from 'react';

import Head from 'next/head';
import styles from '../styles/index.module.scss';

import Footer from '../components/Footer';

import ThemeToggle from '../components/Theme/themeToggle';

import { useStoreContext } from '../context/store';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={`${styles.container}`}>
      <Head>
        <title></title>
        <meta name="description" content="A better way to donate" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <div className={styles.absoluteTheme}>
        <ThemeToggle />
      </div>

      {/* LANDING PAGE */}
      <div className={styles.screen}>LANDING</div>

      {/* ABOUT PAGE */}
      <div className={styles.screen}>ABOUT</div>

      {/* JOIN PAGE */}
      <div className={styles.screen}>JOIN</div>

      {/* CONTACT PAGE */}
      <div className={styles.screen}>CONTACT</div>

      <Footer />
    </div>
  );
};

export default Home;
