import '../styles/globals.css'
import Head from "next/head";
import LayoutWrapper from "../components/layout/layout-wrapper";

function MyApp({ Component, pageProps }) {

    return (
        <>
        <Head>
                <title>Mert Dev</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                <meta property="og:url" content="https://merd.dev" key="ogurl" />
                <meta property="og:title" content="Mert Dev Web Developer Blog" key="ogtitle" />
                <meta property="og:description" content="Full stack developer web blog page, writing about technology, web and everything." key="ogdesc" />
        </Head>
        <LayoutWrapper {...pageProps}>
                <Component {...pageProps} />
        </LayoutWrapper>
        </>
    );
}

export default MyApp;