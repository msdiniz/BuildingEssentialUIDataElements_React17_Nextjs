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
          {/* https://nextjs.org/docs/messages/no-css-tags
          <link href="/style/bootstrap.min.css" rel="stylesheet" />
          {/* <link href="bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" /> */}
          {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/> */}
          {/* <link href="/style/fontawesome/css/all.css" rel="stylesheet" /> */}
          {/* <link href="@fortawesome/react-fontawesome" rel="stylesheet" /> 
          <link href="@fortawesome/react-fontawesome" rel="stylesheet" />
          <link href="@fortawesome/free-solid-svg-icons" rel="stylesheet" /> */}
          {/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous"/> */}
          {/* <link href="/style/styles.css" rel="stylesheet" /> */}
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