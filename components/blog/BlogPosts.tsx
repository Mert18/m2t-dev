import React from "react";
import BlogCard from "./BlogCard";
import { allPosts } from "@/.contentlayer/generated";

const getPosts = async () => {
  return allPosts;
};

const BlogPosts = async () => {
  const posts = await getPosts();

  return (
    <div className="w-full sm:w-2/3 md:w-2/5">
      {posts.map((post) => {
        return (
          <BlogCard
            key={post.title}
            title={post.title}
            description={post.description}
            date={post.date}
            link={post._raw.flattenedPath}
          />
        );
      })}
    </div>
  );
};

export default BlogPosts;
