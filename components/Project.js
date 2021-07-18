import React from "react";
import classes from "./styles/project.module.css";
import Image from "next/image";

const Project = ({ title, desc, techs, link }) => {
  return (
    <article className={classes.project}>
      <div className={classes.title}>
        <p>{title}</p>
      </div>
      <div className={classes.desc}>
        <p>{desc}</p>
      </div>
      <div className={classes.tech}>
        {techs.map((tech) => (
          <div key={tech} className={classes.tech__item}>
            <Image
              src={`/images/icons/${tech}.svg`}
              alt={tech}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
      <footer className={classes.link}>
        <a href={link} target="_blank">
          <p>VISIT</p>
        </a>
      </footer>
    </article>
  );
};

export default Project;
