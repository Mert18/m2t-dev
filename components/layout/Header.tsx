import React from "react";
import Frame from "./Frame";
import { FrameColor } from "@/types";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <Frame title="Header" color={FrameColor.BLACK}>
      <div className="py-5 flex justify-center items-center relative">
        {/* Content */}
        <div className="flex-col justify-center items-center">
          {/* Hero */}
          <div className="flex justify-center items-center">
            <h1>m2t.dev</h1>
          </div>

          {/* Routes */}
          <div className="m-4 flex justify-center">
            <Link href="/" className={`w-14 h-6 ${FrameColor.BLACK}`}></Link>
            <Link
              href="/blog"
              className={`w-14 h-6 ${FrameColor.SERENDIPITY}`}
            ></Link>
            <Link
              href="/about"
              className={`w-14 h-6 ${FrameColor.ENIGMA}`}
            ></Link>
          </div>
        </div>

        {/* External Links */}
        <div className="absolute right-2 top-1/2"></div>
      </div>
    </Frame>
  );
};

export default Header;
