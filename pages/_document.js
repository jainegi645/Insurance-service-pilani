import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Tinos:wght@400;700&display=swap"
            rel="stylesheet"
          />

          
          <title>insurance service pilani</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="life insurance for your love ones "/>
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
