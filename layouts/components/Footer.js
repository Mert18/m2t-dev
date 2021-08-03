import React, { useContext } from "react";
import classes from "../styles/default.module.css";
import { ColorContext } from "../../lib/context";

const Footer = () => {
  return (
    <section className={classes.footer}>
      <ul>
        <li>
          <a href="https://github.com/Mert18" target="_blank">
            Github
          </a>
        </li>
        <li className={classes.even}>
          <a
            href="https://www.linkedin.com/in/mert-u-8248ab135/"
            target="_blank"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            href="https://open.spotify.com/user/vnthw0w8gp2uil1unfvq4nz8n?si=22afd1f6e564414c"
            target="_blank"
          >
            Spotify
          </a>
        </li>
        <li className={classes.even}>
          <a
            href="https://github.com/Mert18/merd-dev"
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
