"use client";
import React, { useEffect } from "react";

const ProgressBar = () => {
  const [percentage, setPercentage] = React.useState(0);
  const targetDate = new Date("2070-03-20");
  const currentDate = new Date();
  const startDate = new Date("2000-03-20");

  const totalTime = targetDate.getTime() - startDate.getTime();
  const elapsedTime = currentDate.getTime() - startDate.getTime();

  useEffect(() => {
    setPercentage(
      parseFloat(Math.min(100, (elapsedTime / totalTime) * 100).toFixed(4))
    );
  }, [elapsedTime, totalTime]);

  return (
    <div className="flex justify-start items-center ml-4">
      <div className="flex w-48 lg:w-96 bg-gray-200 h-8 rounded-sm overflow-hidden border-2 border-light">
        <div
          className="bg-light h-full flex items-center justify-center "
          style={{ width: `${percentage}%` }}
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <p className="text-accent1 lg:text-sm text-xs font-bold">
            %{percentage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
