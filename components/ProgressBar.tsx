"use client";
import React from "react";

const ProgressBar = () => {
  const ONE_DAY = 1000 * 60 * 60 * 24;
  const targetDate = new Date("2060-03-20");
  const currentDate = new Date();
  const startDate = new Date("2000-03-20");
  const differenceInTime = targetDate.getTime() - currentDate.getTime();
  const differenceInDays = Math.ceil(differenceInTime / ONE_DAY);

  const totalTime = targetDate.getTime() - startDate.getTime();
  const elapsedTime = currentDate.getTime() - startDate.getTime();
  const percentage = Math.min(100, (elapsedTime / totalTime) * 100);

  return (
    <div className="flex w-[90%] sm:w-2/5 lg:w-1/5 bg-gray-200 h-8 rounded-sm overflow-hidden border-2 border-light">
      <div
        className="bg-light h-full flex items-center justify-center "
        style={{ width: `${percentage}%` }}
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <p className="text-accent1 text-sm font-bold">
          %{percentage.toFixed(3)}
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;
