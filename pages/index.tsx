import classes from "../styles/Home.module.css";
import Container from "../components/Container";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import BlogPost from "../components/BlogPost";
import { GetStaticProps } from "next";
import { useEffect } from "react";

export default function Home({ posts }) {
  async function getData() {
    const MONGODB = process.env.MONGODBURL;
    const response = await fetch(`${MONGODB}`);
    const data = await response.json();
    return data;
  }

  const filteredBlogPosts = posts.sort(
    (a, b) => b.data.publishedAt - a.data.publishedAt
  );

  useEffect(() => {
    getData();
  });

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

export const getStaticProps: GetStaticProps = () => {
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
};
