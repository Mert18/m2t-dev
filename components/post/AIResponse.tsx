import React from "react";
import Image from "../Image";

interface IAIResponse {
  children: React.ReactNode;
}

const AIResponse = ({ children }: IAIResponse) => {
  return (
    <div className="grid grid-cols-8 w-full mt-2 mb-6">
      <div className="border border-green bg-white_50 col-start-1 col-end-8 h-max rounded-sm p-4">
        {children}
      </div>

      <div className="col-start-8 col-end-9 flex justify-end items-start">
        <Image
          className="border border-border"
          src="/ai.jpg"
          alt="stickman holding flower"
          width={70}
          height={70}
        />
      </div>
    </div>
  );
};

export default AIResponse;
