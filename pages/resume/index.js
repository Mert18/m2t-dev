import React from "react";
import classes from "./resume.module.css";
import Tech from "../../components/Tech.js";
import Link from "next/link";

const Resume = () => {
  return (
    <section className={classes.resume}>
      <article className={classes.introduction}>
        <h3>Introduction</h3>
        <div className={classes.introductiontext}>
          <p>
            Hi, my name is Mert. I have a broad knowledge on web development but
            I prefer calling myself a Frontend Developer. I started web
            development in May, 2020, and never ceased learning since then.
          </p>
          <p>Currently, I am working with Javascript technologies.</p>
        </div>
      </article>

      <article className={classes.techs}>
        <h3>Technologies and Libraries</h3>
        <div className={classes.techsflex}>
          <Tech name="HTML" rank={90} />
          <Tech name="CSS" rank={70} />
          <Tech name="Javascript" rank={70} />
          <Tech name="React.js" rank={70} />
          <Tech name="Next.js" rank={60} />
          <Tech name="Node.js" rank={50} />
          <Tech name="MongoDB" rank={50} />
          <Tech name="PostgreSQL" rank={40} />
          <Tech name="Typescript" rank={30} />
          <Tech name="GraphQL" rank={30} />
        </div>
      </article>

      <article className={classes.tools}>
        <h3>Tools</h3>
        <div className={classes.toolsitems}>
          <p>Git</p>
          <p>Atlassian</p>
          <p>Figma</p>
          <p>Webpack</p>
        </div>
      </article>
      <article className={classes.projects}>
        <h3>Highlighted Projects</h3>
        <div id={classes.link}>
          <Link href="/projects">Projects Section</Link>
        </div>
      </article>
    </section>
  );
};

export default Resume;
