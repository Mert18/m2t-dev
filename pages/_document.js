import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <title>Mert Dev</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="description" content="Mert Uygur. A Full-Stack Developer's blog, playground or diary. MERN Stack, web technologies." />
                    <meta property="og:url" content="https://merd.dev" key="ogurl" />
                    <meta property="og:title" content="Mert Dev Web Developer Blog" key="ogtitle" />
                    <meta property="og:description" content="Full stack developer web blog page, writing about technology, web and everything." key="ogdesc" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument