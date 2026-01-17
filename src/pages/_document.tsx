import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const isProduction = process.env.NODE_ENV === 'production';
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || 'klauserdesigns.ch';

  return (
    <Html lang="de">
      <Head>
        {/* Plausible Analytics - Only in production */}
        {isProduction && (
          <script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
