import React from "react";
import classes from "./blog.module.css";

import Head from "next/head";
import Link from "next/link";
import path from "path";
import fs from "fs";
import grayMatter from "gray-matter";
import Image from "next/image";

const Blog = ({ posts }) => {
  return (
    <div className={classes.blog}>
      <div className={classes.search}>
        <input type="text" />
      </div>
      <ul className={classes.posts}>
        {posts.map(({ title, description, path, date }) => {
          return (
            <li key={path} className={classes.post}>
              <Link href={path} key={path}>
                <h3>{title}</h3>
              </Link>

              <p>{description}</p>
              <p>{date}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "pages/posts");

  const filenames = await fs.readdirSync(
    postsDirectory,
    function (err, content) {
      if (err) {
        return err;
      } else {
        return content;
      }
    }
  );
  const files = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);

      const content = await fs.readFileSync(
        filePath,
        "utf8",
        function (err, xyz) {
          if (err) {
            return err;
          } else {
            return xyz;
          }
        }
      );
      const matter = grayMatter(content);
      return {
        filename,
        matter,
      };
    })
  );

  const posts = files
    .map((file) => {
      return {
        path: `./posts/${file.filename.replace(".mdx", "")}`,
        title: file.matter.data.title,
        description: file.matter.data.description,
        date: file.matter.data.date,
      };
    })
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
