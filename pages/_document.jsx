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
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="modal-buyNow-btn"></div>
      </body>
    </Html>
  );
}
