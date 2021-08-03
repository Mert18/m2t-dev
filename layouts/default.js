import React, { useState, useEffect } from "react";
import Footer from "./components/Footer.js";
import classes from "./styles/default.module.css";
import { useRouter } from "next/router";

import { ThemeContext, ColorContext } from "../lib/context";

export default function Default(props) {
  const [theme, setTheme] = useState("dark");
  const [color, setColor] = useState("first");
  const router = useRouter();
  const [route, setRoute] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(route);
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ColorContext.Provider value={{ color, setColor }}>
        <div className={classes.lay} data-theme={theme} color-palette={color}>
          <header className={classes.layhead}>
            <form onSubmit={submitHandler}>
              <input type="text" onChange={(e) => setRoute(e.target.value)} />
              <ul className={classes.routes}>
                <li>/</li>
                <li>/about</li>
                <li>/projects</li>
                <li>/tmi</li>
                <li>/illustrations</li>
              </ul>
            </form>
          </header>
          <main className={classes.laymain}>{props.children}</main>
          <footer className={classes.layfoot}>
            <Footer />
          </footer>
        </div>
      </ColorContext.Provider>
    </ThemeContext.Provider>
  );
}
