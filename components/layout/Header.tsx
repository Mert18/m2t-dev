import React from "react";
import Frame from "./Frame";
import { FrameColor } from "@/types";
import Link from "next/link";

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
            <Link href="/" className={`w-14 h-6 bg-black`}></Link>
            <Link href="/blog" className={`w-14 h-6 bg-serendipity`}></Link>
            <Link href="/about" className={`w-14 h-6 bg-enigma`}></Link>
          </div>
        </div>

        {/* External Links */}
        <div className="absolute right-2 top-1/2"></div>
      </div>
    </Frame>
  );
};

export default Header;
