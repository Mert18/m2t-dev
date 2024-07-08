'use client'
import React from "react";
import { Post, allPosts } from "@/.contentlayer/generated";
import PostCard from "./PostCard";
import { parseDate } from "@/util/functions.";
import useLanguage from "@/hooks/useLanguage";

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

const HighlightedPost = () => {
  const language = useLanguage();
  const sortedPosts = () => {
    if (!allPosts) return [] as Post[];

    return allPosts.filter(
      (post) => post.language === language && post.category !== "valk"
    ).sort((a, b) => {
      if(language === 'en') {
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);
        return dateB.diff(dateA);
      }else if(language === 'tr') {
        const dateA = parseTurkishDate(a.date);
        const dateB = parseTurkishDate(b.date);
        return dateB.getTime() - dateA.getTime();
      }else {
        return 0;
      }
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
            slug={post.slug}
          />
        );
      })}
    </div>
  );
};

export default HighlightedPost;
