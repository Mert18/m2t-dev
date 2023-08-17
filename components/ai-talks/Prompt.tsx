import Image from "../Image";
import React from "react";

interface IPrompt {
  text: string;
}

const Prompt = ({ text }: IPrompt) => {
  return (
    <div>
      <div>
        <Image
          className="border border-border"
          src="/pp.jpg"
          alt="stickman holding flower"
          width={100}
          height={100}
        />
      </div>
      <p className="p-2">{text}</p>
      <p>Tam gecenin köründe</p>
    </div>
  );
};

export default Prompt;
