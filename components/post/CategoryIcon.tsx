"use client";
import React from "react";

interface ICategoryIcon {
  category: string;
}

const CategoryIcon = ({ category}: ICategoryIcon) => {
  return (
    <div className="mr-2 my-1 rounded-sm relative text-dark text-xs">
      {category !== "" && (
        <p>{category}</p>
      )}
    </div>
  );
};

export default CategoryIcon;
