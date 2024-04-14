import React from "react";
import Image from "../Image";

interface IPrompt {
  children: React.ReactNode;
}

const Prompt = ({ children }: IPrompt) => {
  return (
    <div className="grid grid-cols-8 w-full my-2">
      <div className="col-start-1 col-end-2 flex items-start justify-start">
        <Image
          className="border border-accent1"
          src="/icon/frog.jpg"
          alt="frog"
          width={70}
          height={70}
        />
      </div>
      <div className="border border-accent1 bg-lighter col-start-2 col-end-9 h-max rounded-sm p-4">
        {children}
      </div>
    </div>
  );
};

export default Prompt;
