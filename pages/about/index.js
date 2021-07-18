import React, { useState, useEffect } from "react";
import classes from "./about.module.css";
import Head from "next/head";
import Image from "next/image";
import Project from "../../components/Project";

const icons = [
  "sass",
  "js",
  "react",
  "mongodb",
  "node-js",
  "next-js",
  "postgresql",
];

const arrProjects = [
  {
    title: "This Website!",
    desc: "My blog. I share Illustrations I made, blog posts and other odd things.",
    techs: ["next-js", "mongodb"],
    link: "https://merd.dev/",
  },
  {
    title: "E-commerce",
    desc: "An E-commerce website all about stickers.",
    techs: ["react", "node-js", "mongodb"],
    link: "https://sticker-ankara-mert18.vercel.app/",
  },
  {
    title: "What is Happiness?",
    desc: "A way to figure out what makes you happy. You are asked to enter some values every day, then it graphs your happiness.",
    techs: ["react", "node-js", "postgresql"],
    link: "https://what-is-happiness.vercel.app/",
  },
  {
    title: "Maths and Cards",
    desc: "Maths and Card games with React.",
    techs: ["react", "sass"],
    link: "https://reign-of-cards.vercel.app/",
  },
  {
    title: "Tesadüf",
    desc: "Recommends random books and movies. In Turkish language.",
    techs: ["react"],
    link: "https://tesaduf.vercel.app/",
  },
];
const About = () => {
  const [filter, setFilter] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState(arrProjects);

  useEffect(() => {
    if (filter) {
      setFilteredPosts(
        arrProjects.filter((el) => el.techs.indexOf(filter) > -1)
      );
    } else {
      setFilteredPosts(arrProjects);
    }
  }, [filter]);
  const isActive = (path) => {
    if (filter == path) {
      return {
        transform: "scale(1.55)",
      };
    } else {
      return { color: "var(--text1)" };
    }
  };
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
            <p>Frontend Developer</p>
            <p>Computer Engineering Student</p>
          </div>
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
        <div className={classes.ttle}>
          <p>PROJECTS</p>
        </div>
        <div className={classes.icons}>
          {icons.map((icon) => {
            return (
              <div
                key={icon}
                className={classes.icon}
                onClick={(e) => setFilter(icon)}
                style={isActive(icon)}
              >
                <Image
                  src={`/images/icons/${icon}.svg`}
                  alt={icon}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            );
          })}
        </div>
        <div
          className={classes.removefilter}
          onClick={(e) => setFilter(null)}
          style={isActive()}
        >
          Remove Filters
        </div>
        <div className={classes.projects}>
          {filteredPosts.map((el) => {
            return (
              <li key={el.title}>
                <Project
                  title={el.title}
                  desc={el.desc}
                  img={el.img}
                  techs={el.techs}
                  link={el.link}
                />
              </li>
            );
          })}
        </div>
      </main>
    </section>
  );
};

export default About;
