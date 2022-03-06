import React from "react";
import Link from "next/link";
import { BlogPostCard, PostLink, PostDate, PostTitle } from "./BlogPost.styles";

// Blogpost component
const BlogPost = ({ post }) => {
  return (
    <BlogPostCard>
      <Link
        passHref
        as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
        href={`/blog/[slug]`}
      >
        <PostLink>
          <PostTitle>{post.data.title}</PostTitle>
          <PostDate>{post.data.date}</PostDate>
        </PostLink>
      </Link>
    </BlogPostCard>
  );
};

export default BlogPost;
