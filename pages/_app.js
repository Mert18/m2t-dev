import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import "../blogthemes/duotone-sea.css";
import { pageview } from "../lib/googleAnalytics";
import { useRouter } from "next/router";
import { useEffect } from "react";
import React from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
