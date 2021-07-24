import "../styles/globals.css";
import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";
import React, { Fragment } from "react";
import Layout from "../layouts/default";

const components = {
  pre: (props) => <div {...props} />,
  code: (props) => (
    <pre
      style={{
        color: "var(--text1)",
        fontSize: "1rem",
        backgroundColor: "var(--flavor)",
        padding: "1rem",
      }}
      {...props}
    />
  ),
};

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Mert Dev</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Mert Uygur. A Full-Stack Developer's blog, playground or diary. MERN Stack, web technologies."
        />
        <meta property="og:url" content="https://merd.dev" key="ogurl" />
        <meta
          property="og:title"
          content="Mert Dev Web Developer Blog"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Full stack developer web blog page, writing about technology, web and everything."
          key="ogdesc"
        />
      </Head>
      <Layout>
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
      </Layout>
    </Fragment>
  );
}

export default MyApp;
