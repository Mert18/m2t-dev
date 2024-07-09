"use client";
import useLanguage from "@/hooks/useLanguage";
import Image from "next/image";
import React from "react";

const PostHeader = ({ post }: any) => {
  const language = useLanguage();
  return (
    <div className="p-4 border border-secondary bg-primary-lighter my-2 rounded-md">
      <div className="flex flex-col justify-center items-start text-sm py-4">
        <h1 className="font-bold text-xl">{post.title}</h1>
        <p className="py-4">{post.description}</p>

        {post.category === "valk" && (
          <>
            <p className="text-xs lg:text-sm my-2">
              {post.steps} {language === "en" ? "Steps" : "Adım"}
            </p>
            <p className="text-xs lg:text-sm my-2">{post.distance}</p>
            <p className="text-xs lg:text-sm my-2">{post.duration}</p>
          </>
        )}
        {post.category !== "valk" && (
          <p className="text-accent font-bold">{post.date}</p>
        )}
      </div>
      {post.image && (
        <div className="flex justify-center items-center border-2 rounded-md border-secondary">
          <Image
            src={post.image}
            width={800}
            height={400}
            alt={post.title}
            className="w-full h-64 object-cover pointer-events-none rounded-md"
          />
        </div>
      )}
    </div>
  );
};

export default PostHeader;
