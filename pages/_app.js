import '../styles/globals.css'
import Head from "next/head";
import LayoutWrapper from "../components/layout/layout-wrapper";
import React, {Fragment} from 'react';

function MyApp({ Component, pageProps }) {

    return (
        <Fragment>
            <Head>
                <title>Mert Dev</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Mert Uygur. A Full-Stack Developer's blog, playground or diary. MERN Stack, web technologies." />
                <meta property="og:url" content="https://merd.dev" key="ogurl" />
                <meta property="og:title" content="Mert Dev Web Developer Blog" key="ogtitle" />
                <meta property="og:description" content="Full stack developer web blog page, writing about technology, web and everything." key="ogdesc" />
            </Head>
            <LayoutWrapper {...pageProps}>
                
                <Component {...pageProps} />
            </LayoutWrapper>
        </Fragment>
    );
}

export default MyApp;