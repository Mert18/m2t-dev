import React, { useState, useEffect } from "react";
import classes from "./projects.module.css";
import Project from "../../components/Project";
import Image from "next/image";

const icons = [
  "html",
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
    complexity: 0.5,
  },
  {
    title: "E-commerce",
    desc: "An E-commerce website all about stickers.",
    techs: ["react", "node-js", "mongodb"],
    link: "https://rsticker-client.vercel.app/",
    complexity: 0.9,
  },
  {
    title: "What is Happiness?",
    desc: "A way to figure out what makes you happy. You are asked to enter some values every day, then it graphs your happiness.",
    techs: ["react", "node-js", "postgresql"],
    link: "https://what-is-happiness-client.vercel.app/",
    complexity: 0.7,
  },
  {
    title: "Maths and Cards",
    desc: "Maths and Card games with React.",
    techs: ["react", "sass"],
    link: "https://reign-of-cards.vercel.app/",
    complexity: 0.4,
  },
  {
    title: "Tesadüf",
    desc: "Recommends random books and movies. In Turkish language.",
    techs: ["react"],
    link: "https://tesaduf.vercel.app/",
    complexity: 0.2,
  },
  {
    title: "Frontend Mentor Tip Calculator Challenge",
    desc: "Takes necessary inputs from determined fields, returns some values.",
    techs: ["js"],
    link: "https://fm-tip-calculator.vercel.app/",
    complexity: 0.2,
  },
  {
    title: "From The Heap",
    desc: "From The Heap basically a song and movie sharing platform. You throw something to the heap, someone gets.",
    techs: ["react", "node-js", "postgresql", "sass"],
    link: "https://from-the-heap.vercel.app/",
    complexity: 0.5,
  },
  {
    title: "Sunnyside Agency Landing Page",
    desc: "Frontend Mentor challenge. Sunnyside is an agency that help brands to grow. Written with HTML semantics and clean Sass folder structure.",
    techs: ["html", "sass"],
    link: "https://fm-sunnyside-agency-landing.vercel.app",
    complexity: 0.4,
  },
];

const Projects = () => {
  const [filter, setFilter] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState(arrProjects);

  useEffect(() => {
    if (filter) {
      setFilteredPosts(
        arrProjects
          .filter((el) => el.techs.indexOf(filter) > -1)
          .sort(function (a, b) {
            return b.complexity - a.complexity;
          })
      );
    } else {
      setFilteredPosts(
        arrProjects.sort(function (a, b) {
          return b.complexity - a.complexity;
        })
      );
    }
  }, [filter]);
  const isActive = (path) => {
    if (filter == path) {
      return {
        transform: "scale(1.55)",
      };
    } else {
      return { color: "var(--flavor2)" };
    }
  };
  return (
    <div className={classes.projects}>
      <div className={classes.filtersort}>
        <div
          className={classes.filter}
          onClick={(e) => setFilter(null)}
          style={isActive()}
        >
          <h2>Filter</h2>
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
      </div>

      <div className={classes.projects}>
        {filteredPosts.map((el) => {
          return (
            <Project
              key={el.title}
              title={el.title}
              desc={el.desc}
              img={el.img}
              techs={el.techs}
              link={el.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
