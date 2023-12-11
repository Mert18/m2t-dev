"use client";
import React, { useEffect } from "react";
import Image from "../Image";

interface ICategoryIcon {
  category: string;
  showExplanation?: boolean;
}

const CategoryIcon = ({ category, showExplanation = true }: ICategoryIcon) => {
  const [explanation, setExplanation] = React.useState<string>("");

  useEffect(() => {
    if (category === "chat") {
      setExplanation("Chat");
    } else if (category === "learning") {
      setExplanation("Learning");
    } else if (category === "cloud") {
      setExplanation("Cloud");
    } else if (category === "java") {
      setExplanation("Java");
    } else if (category === "ai") {
      setExplanation("Artificial Intelligence");
    } else if (category === "database") {
      setExplanation("Database");
    } else if (category === "blog") {
      setExplanation("blog");
    }
  }, [category]);

  return (
    <div className="mx-1 p-2 shadow-md rounded-sm group relative">
      {category !== "" && (
        <Image
          src={`/icon/${category}.svg`}
          alt={category}
          width={25}
          height={25}
        />
      )}

      {showExplanation && (
        <div className="absolute bottom-2/3 left-2/3 hidden group-hover:block bg-white p-2 text-sm border border-border min-w-max z-10">
          <p>{explanation}</p>
        </div>
      )}
    </div>
  );
};

export default CategoryIcon;
