"use client";
import React, { useEffect } from "react";
import Image from "../Image";

interface ICategoryIcon {
  category: string;
}

const CategoryIcon = ({ category }: ICategoryIcon) => {
  const [categoryImg, setCategoryImg] = React.useState<string>("");

  useEffect(() => {
    if (category === "beertalk") {
      setCategoryImg("beer");
    } else if (category === "learning") {
      setCategoryImg("teach");
    } else if (category === "cloud") {
      setCategoryImg("cloud");
    } else if (category === "java") {
      setCategoryImg("java");
    } else {
      setCategoryImg("other");
    }
  }, [category]);

  return (
    <div className="mx-1 p-2 shadow-md rounded-sm">
      <Image
        src={`/icon/${categoryImg}.svg`}
        alt="stickman holding flower"
        width={30}
        height={30}
      />
    </div>
  );
};

export default CategoryIcon;
