import React from "react";
import classes from "./styles/project.module.css";

const Project = ({ title, desc, techs, link, linkSource }) => {
  return (
    <article className={classes.project}>
      <div className={classes.title}>
        <h3>{title}</h3>
      </div>
      <div className={classes.desc}>
        <p>{desc}</p>
      </div>
      <footer className={classes.link}>
        <a href={link} target="_blank">
          <p>Live Demo</p>
        </a>
        <a href={linkSource} target="_blank">
          <p>Source Code</p>
        </a>
      </footer>
    </article>
  );
};

export default Project;
