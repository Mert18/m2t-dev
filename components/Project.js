import React from "react";
import classes from "./styles/project.module.css";

const Project = ({ title, desc, techs, link, linkSource }) => {
  return (
    <li className={classes.project}>
      <div className={classes.title}>
        <p>{title}</p>
      </div>
      <div className={classes.desc}>
        <p>{desc}</p>
      </div>
      <div className={classes.link}>
        <a href={link} rel="noreferrer" target="_blank">
          <p>Live Demo</p>
        </a>
        <a href={linkSource} rel="noreferrer" target="_blank">
          <p>Source Code</p>
        </a>
      </div>
    </li>
  );
};

export default Project;
