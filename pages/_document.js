import Document, { Html, Head, Main, NextScript } from 'next/document'

class MasterDocument extends Document {
    static async getServerSideProps(ctx) {
        const initialProps = await Document.getServerSideProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en" className="antialiased">
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                    <link rel="manifest" href="/manifest.json"/>
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00b4b6"/>
                    <meta name="theme-color" content="#ffffff"/>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css"/>
                </Head>
            <body>
                <Main />
                <NextScript />
            </body>
            </Html>
        )
    }
}

export default MasterDocument