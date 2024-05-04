"use client";
import React, { useEffect, useState } from "react";
import { Post, allPosts } from "@/.contentlayer/generated";
import PostCard from "./PostCard";
import { postCategories } from "@/lib/PostCategories";
import CategoryIcon from "./CategoryIcon";
import { parseDate } from "@/util/functions.";
import Loader from "../Loader";
import LoaderPb from "../FakeLoader";
import FakeLoader from "../FakeLoader";

const getPosts = (filter: string[]) => {
  if (!allPosts) return [] as Post[];
  const sortedPosts = allPosts.sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB.diff(dateA);
  });

  return sortedPosts.filter((post) => {
    if (filter && filter.length > 0) {
      return filter.some((cat) => post.category.includes(cat));
    } else {
      return true;
    }
  });
};

const AllPosts = () => {
  const [filter, setFilter] = useState<string[]>();
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  const handleFilterChange = (category: string) => {
    if (filter?.includes(category)) {
      setFilter((prev) => prev?.filter((cat) => cat !== category));
    } else {
      setFilter((prev) => {
        if (prev) {
          return [...prev, category];
        } else {
          return [category];
        }
      });
    }
  };

  useEffect(() => {
    if (!filter || filter.length === 0) {
      setFilteredPosts(getPosts(new Array<string>()));
      return;
    }
    setFilteredPosts(getPosts(filter));
  }, [filter]);

  return (
    <div className="w-full sm:w-4/5 xl:w-1/2">
      <div className="flex justify-center items-center mb-10 flex-wrap">
        {/* TODO: can be a separate component */}
        <div>
          <button
            className="mr-2 my-1 rounded-sm relative text-dark text-xs"
            onClick={() => handleFilterChange("work")}
            style={filter?.includes("work") ? { textDecoration: "underline" } : {}}
          >
            <p>Work</p>
          </button>
          <button
            className="mr-2 my-1 rounded-sm relative text-dark text-xs"
            onClick={() => handleFilterChange("life")}
            style={filter?.includes("life") ? { textDecoration: "underline"} : {}}
          >
            <p>Life</p>
          </button>
        </div>
      </div>
      {filteredPosts.length === 0 ? <FakeLoader /> : filteredPosts.map((post) => {
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
