"use client";
import React, { useEffect } from "react";
import Image from "../Image";

interface ICategoryIcon {
  category: string;
  showExplanation?: boolean;
}

const CategoryIcon = ({ category, showExplanation = true }: ICategoryIcon) => {
  const [categoryImg, setCategoryImg] = React.useState<string>("");
  const [explanation, setExplanation] = React.useState<string>("");

  useEffect(() => {
    if (category === "beerchat") {
      setCategoryImg("beerchat");
      setExplanation("Beer Chat");
    } else if (category === "learning") {
      setCategoryImg("learning");
      setExplanation("Learning");
    } else if (category === "cloud") {
      setCategoryImg("cloud");
      setExplanation("Cloud");
    } else if (category === "java") {
      setCategoryImg("java");
      setExplanation("Java");
    } else {
      setCategoryImg("other");
    }
  }, [category]);

  return (
    <div className="mx-1 p-2 shadow-md rounded-sm group relative">
      <Image
        src={`/icon/${categoryImg}.svg`}
        alt="stickman holding flower"
        width={30}
        height={30}
      />
      {showExplanation && (
        <div className="absolute bottom-2/3 left-2/3 hidden group-hover:block bg-white p-2 text-sm border border-border min-w-max z-10">
          <p>{explanation}</p>
        </div>
      )}
    </div>
  );
};

export default CategoryIcon;
