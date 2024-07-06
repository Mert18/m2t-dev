import React from "react";
import { Post, allPosts } from "@/.contentlayer/generated";
import PostCard from "./PostCard";
import { parseDate } from "@/util/functions.";

const HighlightedPost = () => {
  const sortedPosts = () => {
    if (!allPosts) return [] as Post[];
    return allPosts.sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB.diff(dateA);
    });
  };

  return (
    <div>
      {sortedPosts().slice(0, 1).map((post) => {
        return (
          <PostCard
            key={post.title}
            title={post.title}
            description={post.description}
            date={post.date}
            link={post._raw.flattenedPath}
            category={post.category}
            image={post.image ?? null}
          />
        );
      })}
    </div>
  );
};

export default HighlightedPost;
