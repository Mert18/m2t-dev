import React from "react";
import Image from "../Image";

interface IAIResponse {
  children: React.ReactNode;
}

const AIResponse = ({ children }: IAIResponse) => {
  return (
    <div className="grid grid-cols-8 w-full mt-2 mb-6">
      <div className="col-start-1 col-end-9 lg:col-start-1 lg:col-end-2 flex items-start justify-start">
        <Image
          className="border border-greenl"
          src="/ai.jpg"
          alt="ai representative woman"
          width={70}
          height={70}
        />
      </div>
      <div className="col-start-1 col-end-9 lg:col-start-2 lg:col-end-9 border border-greenl bg-white h-max rounded-sm p-4">
        {children}
      </div>
    </div>
  );
};

export default AIResponse;
