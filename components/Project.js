import React from "react";
import classes from "./styles/project.module.css";
import Image from "next/image";

const Project = ({ title, desc, img, techs, link }) => {
  return (
    <article className={classes.project}>
      <header className={classes.project__img}>
        <Image
          src={img}
          width={340}
          height={340}
          alt="overlook of the website"
        />
      </header>

      <main className={classes.project__text}>
        <div className={classes.project__title}>
          <h2>{title}</h2>
        </div>
        <div className={classes.project__exp}>
          <p>{desc}</p>
        </div>
        <div className={classes.project__tech}>
          {techs.map((tech) => (
            <div key={tech} className={classes.project__tech__item}>
              <img
                src={`/images/icons/${tech}.svg`}
                width="45px"
                alt={`${tech} icon`}
              />
            </div>
          ))}
        </div>
      </main>
      <footer className={classes.link}>
        <a href={link} target="_blank">
          <p>VISIT</p>
        </a>
      </footer>
    </article>
  );
};

export default Project;
