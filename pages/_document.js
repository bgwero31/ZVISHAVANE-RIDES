// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Tailwind CSS via CDN */}
          <link
            href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-white dark:bg-gray-900 text-black dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
