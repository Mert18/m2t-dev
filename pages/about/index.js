import React from "react";
import classes from "./about.module.css";
import Head from "next/head";
import Image from "next/image";

const About = () => {
  return (
    <section className={classes.about}>
      <Head>
        <title>About a web developer</title>
        <meta
          name="description"
          content="Important things about a web developer."
        />
      </Head>
      <main className={classes.content}>
        <div className={classes.hero}>
          <div className={classes.hero__prof}>
            <Image src="/images/assets/prof.jpg" width="250px" height="250px" />
          </div>

          <div className={classes.hero__text}>
            <p id={classes.role}>Frontend Developer</p>
            <p>Computer Engineering</p>
            <div className={classes.hero__links}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Mert18"
              >
                Github
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/mert-u-8248ab135/"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;
