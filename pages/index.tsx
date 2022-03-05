import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import { GetStaticProps } from "next";
import { useEffect } from "react";
import Layout from "../components/Layout";
import BlogPostList from "../components/Blog/BlogPostList";
import styled from "styled-components";

const HomeWrapper = styled.div`
  background: var(--primary);
`;

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
    <Layout>
      <HomeWrapper>
        <BlogPostList posts={filteredBlogPosts} />
      </HomeWrapper>
    </Layout>
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
