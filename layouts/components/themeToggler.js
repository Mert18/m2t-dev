import React, { useContext } from "react";
import { ThemeContext } from "../../lib/context";
import classes from "../styles/default.module.css";
import Image from "next/image";

const ThemeToggler = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeToggle = (e) => {
    e.preventDefault();
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={classes.themeToggler} onClick={handleThemeToggle}>
      {theme === "light" ? (
        <div className={classes.icon}>
          <Image
            src="/images/icons/moon.svg"
            alt="moon"
            layout="fill"
            objectFit="contain"
          />
        </div>
      ) : (
        <div className={classes.icon}>
          <Image
            src="/images/icons/sun.svg"
            alt="sun"
            layout="fill"
            objectFit="contain"
          />
        </div>
      )}
    </div>
  );
};

export default ThemeToggler;
