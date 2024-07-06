import React from "react";

const PostHeader = ({ post }: any) => {
  return (
    <div className="p-4 border border-secondary bg-primary-lighter my-2 rounded-md">
      <div className="flex flex-col justify-center items-start text-sm py-4">
        <h1 className="font-bold text-xl">{post.title}</h1>
        <p className="py-4">{post.description}</p>
        <p className="text-accent font-bold">{post.date}</p>
      </div>
      {post.image && (
        <div className="flex justify-center items-center py-4">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover pointer-events-none"
          />
        </div>
      )}
    </div>
  );
};

export default PostHeader;
