import '../styles/globals.css'
import Head from "next/head";
import Layout from "../components/layout/layout.js";

function MyApp({ Component, pageProps }) {
    return (
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
    );
}

export default MyApp;