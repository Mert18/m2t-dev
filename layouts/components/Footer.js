import React, { useContext } from "react";
import classes from "../styles/default.module.css";
import { ColorContext } from "../../lib/context";

const Footer = () => {
  return (
    <section className={classes.footer}>
      <ul>
        <a href="https://github.com/Mert18" target="_blank">
          <li id={classes.github}>Github</li>
        </a>
        <a href="https://www.linkedin.com/in/mert-u-8248ab135/" target="_blank">
          <li id={classes.linkedin}>Linkedin</li>
        </a>
        <a
          href="https://open.spotify.com/user/vnthw0w8gp2uil1unfvq4nz8n?si=22afd1f6e564414c"
          target="_blank"
        >
          <li id={classes.spotify}>Spotify</li>
        </a>
        <a
          href="https://github.com/Mert18/merd-dev"
          target="_blank"
          rel="noreferrer"
        >
          <li id={classes.sourcecode}>Source Code</li>
        </a>
      </ul>
    </section>
  );
};

export default Footer;
