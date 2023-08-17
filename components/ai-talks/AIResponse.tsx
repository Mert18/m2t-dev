import React from "react";
import Image from "../Image";

interface IAIResponse {
  text: string;
}

const AIResponse = ({ text }: IAIResponse) => {
  return (
    <div className="grid grid-cols-6 w-full">
      <div className="border border-green bg-white_100 col-start-1 col-end-6 h-max">
        <p className="p-2 rounded-sm break-words">{text}</p>
      </div>

      <div className="col-start-6 col-end-7 flex justify-end items-start">
        <Image
          className="border border-border"
          src="/ai.jpg"
          alt="stickman holding flower"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default AIResponse;
