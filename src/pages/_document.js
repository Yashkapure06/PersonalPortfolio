import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-IN'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
          <meta property="og:title" content="Yash Kapure | Web Developer | DSA in Python |UpComing Flutter Developer | Enthustics in AI &amp; ML "/>
          <meta property="og:description"
            content="Hi There! This is Yash. A Programmer who loves to learn more about programming. I also have some good knowledge of web development. I also love to learn new things." />
          <meta name="description"
            content="Hi There! This is Yash. A Programmer who loves to learn more about programming. I also have some good knowledge of web development. I also love to learn new things."/>
          <meta name="author" content="Yash Kapure"/>
          <meta name="email" content="yashkapure06@gmail.com"/>
          <meta name="copyright" content="Yash Kapure 2022" />
          
          <meta property="og:type" content="Portfolio Website" />
            
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta property="og:image" content="public/images/profile.png"/>
          <meta property="og:image:secure_url" content="public/images/profile.png"/>
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="200"/>
          <meta property="og:image:height" content="200"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}