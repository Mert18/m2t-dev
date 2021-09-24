import classes from "../styles/Home.module.css";
import Container from "../components/Container";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import BlogPost from "../components/BlogPost";
import React from "react";

export default function Home({ posts }) {
  return (
    <Container>
      <div className={classes.homepage}>
        <div className={classes.homehero}>
          <h1>Mert UYĞUR</h1>
          <p>Frontend Developer</p>
        </div>
        <div className={classes.blogposthome}>
          <ul>
            {posts.map((post) => (
              <li key={post.filePath}>
                <BlogPost post={post} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
