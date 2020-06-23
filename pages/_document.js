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
                <div className="max-w-screen-xl mx-auto px-2 sm:px-4">
                    <div className="p-2 rounded-lg bg-gray-900 shadow-lg sm:p-3">
                        <div className="flex items-center justify-between flex-wrap">
                            <div className="w-0 flex-1 flex items-center">
                                <img className="h-6" src="/img/tailwind-ui-logo-on-dark.svg" alt=""/>
                                <p className="ml-3 font-medium text-white truncate">
                      <span className="lg:hidden">
                        <span className="sr-only">Tailwind UI</span> is now in early access!
                      </span>
                                    <span className="hidden lg:inline text-gray-400">
                        <strong className="text-white font-semibold mr-1">Now in early access!</strong>
                        <span className="xl:hidden">Beautiful UI components by the creators of Tailwind CSS.</span>
                        <span className="hidden xl:inline">Beautiful UI components, crafted by the creators of Tailwind CSS.</span>
                      </span>
                                </p>
                            </div>
                            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                                <div className="rounded-md shadow-sm">
                                    <a href="https://tailwindui.com?utm_source=tailwindcss&utm_medium=footer-banner" className="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-gray-900 bg-white hover:text-gray-800 focus:outline-none focus:underline">
                                        Learn more
                                    </a>
                                </div>
                            </div>
                            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                                <button type="button" className="-mr-1 flex p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800">
                                    <svg className="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <NextScript />
            </body>
            </Html>
        )
    }
}

export default MasterDocument