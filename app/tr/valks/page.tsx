import React from 'react'
import { Post, allPosts } from "@/.contentlayer/generated";
import { parseDate } from "@/util/functions.";
import ValkCard from '@/components/valk/ValkCard';

export const metadata = {
  title: "m2t.dev | valks",
  description: "A Software Engineering Blog, walk conversations with myself.",
};

const Valks = () => {
  const sortedValks = () => {
    if (!allPosts) return [] as Post[];
    return allPosts
      .filter((post) => {
        return post.language === "tr" && post.category === "valk";
      })
      .sort((a, b) => {
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);
        return dateB.diff(dateA);
      });
  };
  
  return (
    <div>
      {sortedValks().map((post) => {
        return (
          <ValkCard
            key={post.title}
            title={post.title}
            description={post.description}
            date={post.date}
            link={post._raw.flattenedPath}
            category={post.category}
            image={post.image ?? null}
            valk={post.slug}
            steps={post.steps ?? ""}
            distance={post.distance ?? ""}
            duration={post.duration ?? ""}
          />
        );
      })}
    </div>
  );
}

export default Valks