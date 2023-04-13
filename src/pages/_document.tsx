import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='pt-br'>
      <Head>
        <meta
          name='google-site-verification'
          content='mqySQ3hZrPHdozfYscI1SCT52YN5rfCGb_gJr2Sp_O4'
        />
        <link
          rel='shortcut icon'
          href='/assets/fiveicon.png'
          type='image/x-icon'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
