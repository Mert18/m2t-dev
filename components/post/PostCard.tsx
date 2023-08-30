"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "../Image";
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
      className="flex flex-col justify-center items-center my-2 w-full relative overflow-hidden hover:shadow-lg transition-all"
      href={`/post/${link}`}
    >
      <div className="p-4 hover:cursor-pointer border border-border text-black w-full">
        <div>
          <h1 className="font-bold text-sm w-max p-2">{title}</h1>
          <p className="text-xs p-2">{description}</p>
          <p className="text-xs p-2">{date}</p>
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
