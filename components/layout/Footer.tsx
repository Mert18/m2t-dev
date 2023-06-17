import React from "react";
import Frame from "./Frame";
import { FrameColor } from "@/types";

const Footer = () => {
  return (
    <Frame title="Footer" color={FrameColor.RADIANCE}>
      <div className="py-5 flex justify-center items-center relative">
        {/* Content */}
        <div className="flex-col justify-center items-center"></div>
      </div>
    </Frame>
  );
};

export default Footer;
