import React, { useContext } from "react";
import { ThemeContext } from "../../lib/context";
import classes from "../styles/default.module.css";

const ThemeToggler = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeToggle = (e) => {
    e.preventDefault();
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button className={classes.themeToggler} onClick={handleThemeToggle}>
      <span role="img" aria-label="switch theme">
        {theme === "light" ? "DARK" : "LIGHT"}
      </span>
    </button>
  );
};

export default ThemeToggler;
