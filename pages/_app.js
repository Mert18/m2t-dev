import '../styles/globals.css'
import Head from "next/head";
import LayoutWrapper from "../components/layout/layout-wrapper";

function MyApp({ Component, pageProps }) {

    return (
        <LayoutWrapper {...pageProps}>
                <Component {...pageProps} />
        </LayoutWrapper>
    );
}

export default MyApp;