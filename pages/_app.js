import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import "prismjs/themes/prism-funky.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
