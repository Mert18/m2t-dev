import React from "react";
import { parseDate } from "@/util/functions.";
import { Post, allPosts } from "@/.contentlayer/generated";
import PostCard from "@/components/post/PostCard";

const Blog = () => {
  const sortedPosts = () => {
    if (!allPosts) return [] as Post[];
    return allPosts.filter((post) => post.language === "en" && post.category !== "valk").sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB.diff(dateA);
    });
  };

  return (
    <div>
      {sortedPosts().map((post) => {
        return (
          <PostCard
            key={post.title}
            title={post.title}
            description={post.description}
            date={post.date}
            link={post._raw.flattenedPath}
            category={post.category}
            image={post.image ?? null}
            slug={post.slug}
          />
        );
      })}
    </div>
  )
};

export default Blog;
