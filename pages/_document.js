// pages/_document.js

import Document, { Html, Head, Main, NextScript } from "next/document";

class MainDocument extends Document {
  render() {
    return (
      <Html lang="de">
        <Head>
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MainDocument;
