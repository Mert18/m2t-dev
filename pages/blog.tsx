import Layout from "../components/Layout";
import { GetStaticProps } from "next";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import BlogPostList from "../components/Blog/BlogPostList";
import styled from "styled-components";

const BlogPageWrapper = styled.div`
  min-height: 70vh;
  margin-top: -3rem;
  background: var(--primary);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "left posts";
`;

const Left = styled.div`
  grid-area: left;
`

const Posts = styled.div`
  grid-area: posts;
`

const Blog = ({ posts }) => {
  const filteredBlogPosts = posts.sort(
    (a, b) => b.data.publishedAt - a.data.publishedAt
  );
  return (
    <Layout
      title="Blog Posts - Mert Uygur"
      description="Blog posts about software development, frontend development and backend development."
    >
      <BlogPageWrapper>
        <Left>
        </Left>
        <Posts> 
        <BlogPostList posts={posts} />
        </Posts>
      </BlogPageWrapper>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
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

export default Blog;
