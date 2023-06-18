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
    <Link href={`/blog/${link}`}>
      <div className="p-4 bg-white m-1 hover:cursor-pointer hover:-translate-y-1 transition-all border blog-card">
        <h1 className="font-bold text-sm bg-enigma w-max p-1">{title}</h1>
        <p className="text-xs p-1">{description}</p>
        <p className="text-xs p-1">{date}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
