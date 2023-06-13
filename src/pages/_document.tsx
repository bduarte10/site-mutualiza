import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html lang="pt-br">
      <Head>
        <link rel="shortcut icon" href="/assets/fiveicon.png" type="image/x-icon" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VGX7VX54H5"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-VGX7VX54H5');
              `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}


