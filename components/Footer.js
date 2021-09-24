import React from "react";
import classes from "./styles/container.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <ul>
        <li>
          <a href="https://github.com/Mert18">Github</a>
        </li>
        <li>
          <a href="https://github.com/Mert18/merd-dev">Source Code</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mert-u-8248ab135/">Linkedin</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
