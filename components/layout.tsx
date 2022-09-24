import React from 'react';
import Head from 'next/head';
import { ReactComponent } from '@/types/react';
import { Container } from '@chakra-ui/react';
import { Header } from './header';
import { Footer } from './footer';

export const Layout: ReactComponent = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Vein</title>
        <link
          rel='icon'
          type='image/png'
          href='https://raw.githubusercontent.com/octoi/heartbeat/main/website/assets/logo.svg'
        />
        <meta name='theme-color' content='#FFFEFE' />
        <meta name='description' content='Building productive doctors ⚡' />
        <meta property='og:title' content='Vein' />
        <meta
          property='og:description'
          content='Building productive doctors ⚡'
        />
        <meta
          property='og:image'
          content='https://raw.githubusercontent.com/octoi/heartbeat/main/website/assets/banner.png'
        />
        <meta property='og:type' content='website' />
        <meta
          name='twitter:description'
          content='Building productive doctors ⚡'
        />
        <meta
          name='twitter:image'
          content='https://raw.githubusercontent.com/octoi/heartbeat/main/website/assets/banner.png'
        />
        <meta name='twitter:app:country' content='IN' />
      </Head>

      <Container maxW='container.xl'>
        <Header />
        {children}
        <Footer />
      </Container>
    </div>
  );
};
