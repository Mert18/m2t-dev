import React, { useState, useEffect } from "react";
import classes from "./projects.module.css";
import Project from "../../components/Project";
import Image from "next/image";

const arrProjects = [
  {
    title: "This Website!",
    desc: "My blog. I share Illustrations I made, blog posts and other odd things.",
    techs: ["next-js", "mongodb"],
    link: "https://merd.dev/",
    linkSource: "https://github.com/Mert18/merd-dev",
    complexity: 0.5,
  },
  {
    title: "E-commerce",
    desc: "An E-commerce website all about stickers.",
    techs: ["react", "node-js", "mongodb"],
    link: "https://rsticker-client.vercel.app/",
    linkSource: "https://github.com/Mert18/Rsticker-client",
    complexity: 0.9,
  },
  {
    title: "What is Happiness?",
    desc: "A way to figure out what makes you happy. You are asked to enter some values every day, then it graphs your happiness.",
    techs: ["react", "node-js", "postgresql"],
    link: "https://what-is-happiness-client.vercel.app/",
    linkSource: "https://github.com/Mert18/what-is-happiness-client",
    complexity: 0.7,
  },
  {
    title: "Maths and Cards",
    desc: "Maths and Card games with React.",
    techs: ["react", "sass"],
    link: "https://reign-of-cards.vercel.app/",
    linkSource: "https://github.com/Mert18/reign-of-cards",
    complexity: 0.4,
  },
  {
    title: "Tesadüf",
    desc: "Recommends random books and movies. In Turkish language.",
    techs: ["react"],
    link: "https://tesaduf.vercel.app/",
    linkSource: "https://github.com/Mert18/tesaduf",
    complexity: 0.2,
  },
  {
    title: "Frontend Mentor Tip Calculator Challenge",
    desc: "Takes necessary inputs from determined fields, returns some values.",
    techs: ["js"],
    link: "https://fm-tip-calculator.vercel.app/",
    linkSource: "https://github.com/Mert18/fm-tip-calculator",
    complexity: 0.2,
  },
  {
    title: "Sunnyside Agency Landing Page",
    desc: "Frontend Mentor challenge. Sunnyside is an agency that help brands to grow. Written with HTML semantics and clean Sass folder structure.",
    techs: ["html", "sass"],
    link: "https://fm-sunnyside-agency-landing.vercel.app",
    linkSource: "https://github.com/Mert18/fm-sunnyside-agency-landing",
    complexity: 0.4,
  },
  {
    title: "Blogr Landing Page",
    desc: "Frontend Mentor challenge. Grow your online brand with blogr. Folder structure, semantics and flexbox, grid practice.",
    techs: ["html", "sass"],
    link: "https://fm-blogr-landing-page-drab.vercel.app",
    linkSource: "https://github.com/Mert18/fm-blogr-landing-page",
    complexity: 0.5,
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
        transform: "scale(1.25)",
      };
    } else {
      return { color: "var(--secondary)" };
    }
  };
  return (
    <section className={classes.projects}>
      <ul className={classes.filters}>
        <li onClick={() => setFilter("")} style={isActive("")}>
          Filter
        </li>
        <li onClick={() => setFilter("html")} style={isActive("html")}>
          HTML
        </li>
        <li onClick={() => setFilter("js")} style={isActive("js")}>
          Javascript
        </li>
        <li onClick={() => setFilter("react")} style={isActive("react")}>
          React.js
        </li>
        <li onClick={() => setFilter("node-js")} style={isActive("node-js")}>
          Node.js
        </li>
        <li onClick={() => setFilter("next-js")} style={isActive("next-js")}>
          Next.js
        </li>
        <li onClick={() => setFilter("mongodb")} style={isActive("mongodb")}>
          MongoDB
        </li>
        <li
          onClick={() => setFilter("postgresql")}
          style={isActive("postgresql")}
        >
          PostgreSQL
        </li>
      </ul>
      <div className={classes.items}>
        {filteredPosts.map((el) => {
          return (
            <Project
              key={el.title}
              title={el.title}
              desc={el.desc}
              techs={el.techs}
              link={el.link}
              linkSource={el.linkSource}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
