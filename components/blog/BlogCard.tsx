import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IBlogCard {
  title: string;
  description: string;
  date: string;
  link: string;
}

const BlogCard = ({ title, description, date, link }: IBlogCard) => {
  return (
    <Link
      className="flex flex-col justify-center items-center p-2"
      href={`/blog/${link}`}
    >
      <div className="w-full h-10 bg-black relative">
        <Image
          src="/backgrounds/roses.jpg"
          alt="bf"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="p-4 hover:cursor-pointer gradient border border-border text-black">
        <h1 className="font-bold text-sm w-max p-1">{title}</h1>
        <p className="text-xs p-1">{description}</p>
        <p className="text-xs p-1">{date}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
