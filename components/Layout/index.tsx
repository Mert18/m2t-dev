import { useRouter } from "next/router";
import { useState } from "react";
import Header from "./Header";
import { ThemeContext } from "../../lib/context";
import Cookies from "js-cookie";
import Footer from "./Footer";

const Layout = ({ children, ...rest }) => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const [theme, setTheme] = useState(Cookies.get("theme"));

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div data-theme={theme}>
        <Header theme={theme} setTheme={setTheme} />
        <main role="main">{children}</main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
