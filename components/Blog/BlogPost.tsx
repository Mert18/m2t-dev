import React from "react";
import Link from "next/link";
import classes from "./styles/blogpost.module.css";
import { BlogPostCard, PostDate, PostTitle } from "./BlogPost.styles";

// Blogpost component
const BlogPost = ({ post }) => {
  return (
    <BlogPostCard>
      <Link
        as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
        href={`/blog/[slug]`}
      >
        <a>
          <PostTitle>{post.data.title}</PostTitle>
        </a>
      </Link>

      <PostDate>{post.data.date}</PostDate>
    </BlogPostCard>
  );
};

export default BlogPost;
