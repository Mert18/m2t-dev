import '../styles/globals.css'
import Head from "next/head";

import DefaultLayout from "../components/layout/default.js";
import HomeLayout from "../components/layout/home.js"; 

function MyApp({ Component, pageProps }) {

    const Layout = Component.Layout || DefaultLayout;

    return (
        <HomeLayout>
            <Layout>
                <Head>
                    <title>Mert Dev</title>
                    <meta
                        name="Developer Mert Blog"
                        content="Blog Posts and all about me."
                    />
                </Head>

                <Component {...pageProps} />
            </Layout>
        </HomeLayout>
    );
}

export default MyApp;