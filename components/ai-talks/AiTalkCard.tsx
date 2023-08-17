import React from "react";
import Link from "next/link";

interface IAiTalkCard {
  title: string;
  description: string;
  date: string;
  link: string;
}

const AiTalkCard = ({ title, description, date, link }: IAiTalkCard) => {
  return (
    <Link
      className="flex flex-col justify-center items-center p-2 w-full"
      href={`/ai-talks/${link}`}
    >
      <div className="p-4 hover:cursor-pointer border border-border text-black w-full">
        <h1 className="font-bold text-sm w-max p-1">{title}</h1>
        <p className="text-xs p-1">{description}</p>
        <p className="text-xs p-1">{date}</p>
      </div>
    </Link>
  );
};

export default AiTalkCard;
