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
          content="Develocity Finance, Develocity Token, blockchain projects, BSC blockchain scanner, token analysis, tokenomics, financial growth, Develocity Tool, digital assets, secure platform, investment opportunities"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=GT-M3LZPHZ`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GT-M3LZPHZ');
          `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PSHKHXL');
          `,
          }}
        />

    <script
    dangerouslySetInnerHTML={{
      __html:`     
      !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
      },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
      a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
      twq('config','of474');`,
    
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PSHKHXL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Main />
        <NextScript />
        <div id="modal-buyNow-btn"></div>
      </body>
    </Html>
  );
}
