import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
//import '../styles/styles.css'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head>
          {/* <link href="/styles/bootstrap.min.css" rel="stylesheet" /> */}
          <link href="bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" />
          {/* <link href="/styles/fontawesome/css/all.css" rel="stylesheet" /> */}
          {/* <link href="@fortawesome/react-fontawesome" rel="stylesheet" /> */}
          {/* <link href="@fortawesome/react-fontawesome" rel="stylesheet" />
          <link href="@fortawesome/free-solid-svg-icons" rel="stylesheet" /> */}
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous"/>
          <link href="/styles/style.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;