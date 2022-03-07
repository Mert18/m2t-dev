import { AppProps } from "next/app";
import "../styles/globals.css";
import "../blogthemes/duotone-sea.css";

function MyApp({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />;
}

export default MyApp;
