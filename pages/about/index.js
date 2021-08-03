import React from "react";
import classes from "./about.module.css";
import Head from "next/head";

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
        <p>I am a Frontend Developer.</p>
      </main>
    </section>
  );
};

export default About;
