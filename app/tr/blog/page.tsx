import React from "react";
import { parseDate } from "@/util/functions.";
import { Post, allPosts } from "@/.contentlayer/generated";
import PostCard from "@/components/post/PostCard";

type MonthMapping = {
  [key: string]: number;
};

const monthMapping: MonthMapping = {
  "Ocak": 1,
  "Şubat": 2,
  "Mart": 3,
  "Nisan": 4,
  "Mayıs": 5,
  "Haziran": 6,
  "Temmuz": 7,
  "Ağustos": 8,
  "Eylül": 9,
  "Ekim": 10,
  "Kasım": 11,
  "Aralık": 12
};

function parseTurkishDate(dateStr: string) {
  const [day, monthName, year] = dateStr.split(' ');
  const month = monthMapping[monthName];
  return new Date(parseInt(year), month, parseInt(day));
}

const Blog = () => {
  const sortedPosts = () => {
    if (!allPosts) return [] as Post[];
    return allPosts.filter((post) => post.language === "tr" && post.category !== "valk").sort((a, b) => {
      const dateA = parseTurkishDate(a.date);
      const dateB = parseTurkishDate(b.date);
      return dateB.getTime() - dateA.getTime();
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
