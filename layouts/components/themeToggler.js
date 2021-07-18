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
      {theme === "light" ? "NIGHT" : "DAY"}
    </button>
  );
};

export default ThemeToggler;
