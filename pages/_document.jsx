import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charset="UTF-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <title>Develocity Finance | Innovative Blockchain Projects & Develocity Token</title>
        <meta
          name="description"
          content="Discover Develocity Finance, a digital platform offering Develocity Token, Develocity Tool integration, and exclusive blockchain projects. Transform your financial experience with cutting-edge technology."
        />
        <meta
          name="keywords"
          content="Develocity Finance, Develocity Token, blockchain projects, BSC blockchain scanner, token analysis, tokenomics, financial growth, Develocity Tool, digital assets, secure platform, investment opportunities"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <meta property="og:image" content="/apple-icon-114x114.png" />
        <meta property="og:image:width" content="114" />
        <meta property="og:image:height" content="114" />
        <link rel="icon" type="image/x-icon" href="favicon.jpg"></link>
        <link rel="apple-touch-icon" href="favicon.jpg" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="modal-buyNow-btn"></div>
      </body>
    </Html>
  );
}
