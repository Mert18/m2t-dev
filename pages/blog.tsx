import Layout from "../components/Layout";
import { GetStaticProps } from "next";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import BlogPostList from "../components/Blog/BlogPostList";
import { BlogPageWrapper, Posts, Left } from "../styles/blog.styles";
import SectionHeader from "../components/SectionHeader";

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
        <Left></Left>
        <Posts>
          <SectionHeader title="Blog Posts" />
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
