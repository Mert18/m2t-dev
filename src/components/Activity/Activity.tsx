import React from "react";

interface IActivity {
  activity: string;
  date: string;
}

const Activity = ({ activity, date }: IActivity) => {
  return (
    <div className="text-black-200 my-2 p-2">
      <p className="text-black-100">{activity}</p>
      <p className="text-sm">{date}</p>
      <div className="flex items-center my-2">
        <div className="w-1/2 h-1 bg-black-200 rounded"></div>
        <div className="w-2 h-2 bg-black-200 mx-1 rounded-full"></div>
        <div className="w-1/2 h-1 bg-black-200 rounded"></div>
      </div>
    </div>
  );
};

export default Activity;
