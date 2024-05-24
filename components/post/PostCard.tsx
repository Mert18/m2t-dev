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
    <div className="odd:text-dark even:text-white even:bg-greend odd:bg-white h-96 lg:h-64">
      <Link
        className="hover:underline w-full h-full"
        href={`/post/${link}`}
      >
        <div className="hover:cursor-pointer w-full h-full p-4 flex flex-col lg:flex-row justify-center items-center lg:justify-start">
            {image && (
              <Image
                src={image}
                alt="Lycians pixel art"
                width={150}
                height={150}
                className="mr-4"
              />
            )}
          <div className="flex flex-col lg:flex-col lg:justify-start items-center lg:items-start mt-4 lg:mt-0">
            <h1 className="font-bold text-base md:text-xl lg:text-2xl">
              {title}
            </h1>
            <p className="text-xs lg:text-sm">{description}</p>
            <p className="text-xs lg:text-sm">{date}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
