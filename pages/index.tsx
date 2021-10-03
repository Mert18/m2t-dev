import classes from "../styles/Home.module.css";
import Container from "../components/Container";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import BlogPost from "../components/BlogPost";
import React from "react";

export default function Home({ posts }) {
  const filteredBlogPosts = posts.sort(
    (a, b) => b.data.publishedAt - a.data.publishedAt
  );

  return (
    <Container>
      <div className={classes.homepage}>
        <ul className={classes.bloglist}>
          {filteredBlogPosts.map((post) => (
            <li key={post.filePath}>
              <BlogPost post={post} />
            </li>
          ))}
        </ul>
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
