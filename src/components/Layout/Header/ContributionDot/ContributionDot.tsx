import React from "react";

interface IContributionDot {
  color: string;
  count: number;
  date: string;
}

const ContributionDot = ({ color, count, date }: IContributionDot) => {
  return (
    <div
      className="w-4 h-4 rounded-full"
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default ContributionDot;
