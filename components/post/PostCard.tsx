"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import CategoryIcon from "./CategoryIcon";

interface IPostCard {
  title: string;
  description: string;
  date: string;
  link: string;
  category: string;
}

const PostCard = ({ title, description, date, link, category }: IPostCard) => {
  const [categories, setCategories] = React.useState<string[]>([]);

  useEffect(() => {
    setCategories([]);
    category.split(",").map((cat) => {
      setCategories((prev) => [...prev, cat]);
    });
  }, [category]);

  return (
    <Link
      className="my-2 w-full transition-all hover:underline"
      href={`/post/${link}`}
    >
      <div className="hover:cursor-pointer text-dark w-full p-2">
        <div>
          <h1 className="font-bold text-xs lg:text-sm py-1">{title}</h1>
          <p className="text-xs py-1">{description}</p>
          <p className="text-xs py-1 text-accent1">{date}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center">
            {categories.map((cat) => {
              return <CategoryIcon key={cat} category={cat} />;
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
