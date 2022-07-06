import '../styles/globals.scss';
import type { AppProps } from 'next/app';

import StoreProvider from '../context/store';
import ThemeWrapper from '../components/Theme';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <ThemeWrapper>
        <Component {...pageProps} />
      </ThemeWrapper>
    </StoreProvider>
  );
}

export default MyApp;
