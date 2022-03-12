import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import { GetStaticProps } from "next";
import { useEffect } from "react";
import Layout from "../components/Layout";
import BlogPostList from "../components/Blog/BlogPostList";
import styled from "styled-components";
import SectionHeader from "../components/SectionHeader";

const HomeWrapper = styled.div`
  background: var(--primary);
  min-height: 80vh;
  margin-top: -2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "blog info";

  @media(max-width: 1100px){
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: "blog"
    "info";
  }
`;

const BlogPart = styled.div`
  grid-area: blog;
`;

const Info = styled.div`
  grid-area: info;
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
        <BlogPart>
        <SectionHeader title="Latest Blog Posts" />  
          <BlogPostList posts={filteredBlogPosts} />
        </BlogPart>
        <Info></Info>
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
