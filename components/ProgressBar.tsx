"use client";
import React, { useEffect } from "react";

const ProgressBar = () => {
  const targetDate = new Date("2070-03-20");
  const currentDate = new Date();
  const startDate = new Date("2000-03-20");

  const totalTime = targetDate.getTime() - startDate.getTime();
  const elapsedTime = currentDate.getTime() - startDate.getTime();
  const percentage = Math.min(100, (elapsedTime / totalTime) * 100);

  return (
    <div className="flex justify-start items-center ml-4">
      <p className="text-light">0</p>
      <div className="flex w-48 lg:w-96 bg-gray-200 h-8 rounded-sm overflow-hidden border-2 border-light">
        <div
          className="bg-light h-full flex items-center justify-center "
          style={{ width: `${percentage}%` }}
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <p className="text-accent1 lg:text-sm text-xs font-bold">
            %{percentage.toFixed(4)}
          </p>
        </div>
      </div>
      <p className="text-light">70</p>
    </div>
  );
};

export default ProgressBar;
