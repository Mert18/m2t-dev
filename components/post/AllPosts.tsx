"use client";
import React, { useEffect, useState } from "react";
import { Post, allPosts } from "@/.contentlayer/generated";
import PostCard from "./PostCard";
import { parseDate } from "@/util/functions.";
import FakeLoader from "../FakeLoader";

const getPosts = () => {
  if (!allPosts) return [] as Post[];
  return allPosts.sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB.diff(dateA);
  });
};

const AllPosts = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = () => {
      try {
        const fetchedPosts = getPosts(); // Directly call the synchronous function
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Failed to fetch posts", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <FakeLoader />;
  }

  return (
    <div>
      {posts.map((post) => {
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

export default AllPosts;
