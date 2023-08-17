import React from "react";
import Image from "../Image";

interface IPrompt {
  text: string;
}

const Prompt = ({ text }: IPrompt) => {
  return (
    <div className="grid grid-cols-6 w-full">
      <div className="col-start-1 col-end-2 flex items-start justify-start">
        <Image
          className="border border-border"
          src="/pp.jpg"
          alt="stickman holding flower"
          width={100}
          height={100}
        />
      </div>
      <div className="border border-serendipity bg-white_100 col-start-2 col-end-7 h-max">
        <p className="p-2 rounded-sm break-words">{text}</p>
      </div>
    </div>
  );
};

export default Prompt;
