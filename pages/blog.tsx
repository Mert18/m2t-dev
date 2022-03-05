import Layout from "../components/Layout";
import classes from "../styles/blog.module.css";
import { GetStaticProps } from "next";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import BlogPostList from "../components/Blog/BlogPostList";

export default function Blog({ posts }) {
  const filteredBlogPosts = posts.sort(
    (a, b) => b.data.publishedAt - a.data.publishedAt
  );
  return (
    <Layout
      title="Blog Posts - Mert Uygur"
      description="Blog posts about software development, frontend development and backend development."
    >
      <div className={classes.blog}>
        <div className={classes.blogposthome}>
          <BlogPostList posts={posts} />
        </div>
      </div>
    </Layout>
  );
}

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
