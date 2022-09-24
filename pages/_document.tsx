import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript, extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
};

const theme = extendTheme({ config });

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
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
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
