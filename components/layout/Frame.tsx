"use client";
import React, { useState, useEffect } from "react";
import { FrameColor } from "@/types/index";

interface IFrame {
  title: string;
  color: FrameColor;
  children: React.ReactNode;
}

const Frame = ({ title, color, children }: IFrame) => {
  const backgroundColors = {
    [FrameColor.BLACK]: "bg-black",
    [FrameColor.SERENDIPITY]: "bg-serendipity",
    [FrameColor.ENIGMA]: "bg-enigma",
    [FrameColor.RADIANCE]: "bg-radiance",
  };

  return (
    <div className="flex">
      {/* Side Color Line */}
      <div className={`w-6 ${backgroundColors[color]}`}></div>

      <div className="flex-col w-full">
        {/* Frame */}
        <div>
          <h2 className="p-2 italic">{title}.</h2>
          <div className={`h-0.5 w-full ${backgroundColors[color]}`}></div>
        </div>

        {/* Content */}
        <div className="flex-1 p-2">{children}</div>
      </div>
    </div>
  );
};

export default Frame;
