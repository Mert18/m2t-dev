"use client";
import React from "react";

interface ICategoryIcon {
  category: string;
}

const CategoryIcon = ({ category}: ICategoryIcon) => {
  return (
    <div className="mr-2 p-2 my-1 shadow-md rounded-sm relative text-dark text-xs hover:bg-lighter">
      {category !== "" && (
        <p>{category}</p>
      )}
    </div>
  );
};

export default CategoryIcon;
