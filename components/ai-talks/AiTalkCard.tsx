import React from "react";
import Link from "next/link";
import Image from "../Image";

interface IAiTalkCard {
  title: string;
  description: string;
  date: string;
  link: string;
  category: string;
}

const AiTalkCard = ({
  title,
  description,
  date,
  link,
  category,
}: IAiTalkCard) => {
  return (
    <Link
      className="flex flex-col justify-center items-center m-2 w-full relative overflow-hidden hover:shadow-lg transition-all"
      href={`/ai-talks/${link}`}
    >
      <div className="p-4 hover:cursor-pointer border border-border text-black w-full">
        <div>
          <h1 className="font-bold text-sm w-max p-1">{title}</h1>
          <p className="text-xs p-1">{description}</p>
          <p className="text-xs p-1">{date}</p>
        </div>
        <div className="absolute top-0 -right-5 -rotate-45">
          {category === "beertalk" ? (
            <Image
              className="opacity-50"
              src="/beer.svg"
              alt="stickman holding flower"
              width={150}
              height={150}
            />
          ) : (
            <Image
              className="opacity-50"
              src="/teach.svg"
              alt="stickman holding flower"
              width={150}
              height={150}
            />
          )}
        </div>
      </div>
    </Link>
  );
};

export default AiTalkCard;
