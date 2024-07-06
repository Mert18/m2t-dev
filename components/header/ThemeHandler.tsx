"use client";
import { useTheme } from "@/app/themeContext";
import React, { useState } from "react";

const ThemeHandler = () => {
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const { changeTheme } = useTheme();

  const handleThemeChange = (newTheme: string) => {
    setThemeMenuOpen(!themeMenuOpen);
    changeTheme(newTheme);
  }

  return (
    <div className="relative flex flex-col justify-center items-center bg-primarylighter text-secondary border border-secondary rounded-md font-bold">
      <button className="p-2" onClick={() => setThemeMenuOpen(!themeMenuOpen)}>
        Toggle Theme
      </button>
      {themeMenuOpen && (
        <div className="absolute w-full mt-2 top-full left-0 flex flex-col justify-center items-center bg-primarylighter text-secondary border border-secondary rounded-md font-bold">
          <button className="p-2" onClick={() => handleThemeChange("nature")}>Nature</button>
          <button className="p-2" onClick={() => handleThemeChange("beige")}>Beige</button>
          <button className="p-2" onClick={() => handleThemeChange("frost")}>Frost</button>
          <button className="p-2" onClick={() => handleThemeChange("harvest")}>Harvest</button>
          <button className="p-2" onClick={() => handleThemeChange("retro")}>Retro</button>
          <button className="p-2" onClick={() => handleThemeChange("urban")}>Urban</button>
        </div>
      )}
    </div>
  );
};

export default ThemeHandler;
