import React from "react";
import { allPosts } from "@/.contentlayer/generated";
import PostCard from "./PostCard";

const getPosts = async () => {
  return allPosts;
};

const AllPosts = async () => {
  const posts = await getPosts();

  return (
    <div className="w-full sm:w-2/3 md:w-2/5">
      {posts.map((post) => {
        return (
          <PostCard
            key={post.title}
            title={post.title}
            description={post.description}
            date={post.date}
            link={post._raw.flattenedPath}
            category={post.category}
          />
        );
      })}
    </div>
  );
};

export default AllPosts;
