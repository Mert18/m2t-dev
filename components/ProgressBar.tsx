"use client";
import React from "react";

const ProgressBar = () => {
  const targetDate = new Date("2070-03-20");
  const currentDate = new Date();
  const startDate = new Date("2000-03-20");

  const totalTime = targetDate.getTime() - startDate.getTime();
  const elapsedTime = currentDate.getTime() - startDate.getTime();
  const percentage = Math.min(100, (elapsedTime / totalTime) * 100);

  return (
    <div className="flex w-48 lg:w-96 bg-gray-200 h-8 ml-4 rounded-sm overflow-hidden border-2 border-light">
      <div
        className="bg-light h-full flex items-center justify-center "
        style={{ width: `${percentage}%` }}
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <p className="text-accent1 lg:text-sm text-xs font-bold">
          %{percentage.toFixed(3)}
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;
