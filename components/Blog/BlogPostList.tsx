import React from "react";
import BlogPost from "./BlogPost";
import { BlogPostListWrapper } from "./BlogPostList.styles";

const BlogPostList = ({ posts }) => {
  return (
    <BlogPostListWrapper>
      {posts.map((post) => (
        <li key={post.filePath}>
          <BlogPost post={post} />
        </li>
      ))}
    </BlogPostListWrapper>
  );
};

export default BlogPostList;
