import React from "react";
import { allPosts } from "@/.contentlayer/generated";
import AiTalkCard from "./AiTalkCard";

const getAiTalks = async () => {
  return allPosts.filter((post: any) => post.kind === "aitalk");
};

const AiTalksList = async () => {
  const aiTalks = await getAiTalks();

  return (
    <div className="w-full sm:w-2/3 md:w-2/5">
      {aiTalks.map((post: any) => {
        return (
          <AiTalkCard
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

export default AiTalksList;
