"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import CategoryIcon from "./CategoryIcon";
import Image from "next/image";

interface IPostCard {
  title: string;
  description: string;
  date: string;
  link: string;
  category: string;
  image: string | null;
}

const PostCard = ({
  title,
  description,
  date,
  link,
  category,
  image,
}: IPostCard) => {
  const [categories, setCategories] = React.useState<string[]>([]);

  useEffect(() => {
    setCategories([]);
    category.split(",").map((cat) => {
      setCategories((prev) => [...prev, cat]);
    });
  }, [category]);

  return (
    <div className="odd:text-dark even:text-white even:bg-greend odd:bg-white h-64">
      <Link
        className="hover:underline w-full h-full flex justify-between items-center relative"
        href={`/post/${link}`}
      >
        <div className="hover:cursor-pointer w-full p-4">
          <div>
            <h1 className="font-bold text-base md:text-xl lg:text-2xl">
              {title}
            </h1>
            <p className="text-xs lg:text-sm">{description}</p>
            <p className="text-xs lg:text-sm">{date}</p>
          </div>
        </div>
        {image && (
            <Image
              src={image}
              alt="Lycians pixel art"
              layout="fill"
              objectFit="contain"
            />
        )}
      </Link>
    </div>
  );
};

export default PostCard;
