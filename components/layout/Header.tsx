import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center h-64">
      {/* Hero */}
      <div className="flex flex-col justify-center items-center w-2/5 p-2">
        <div>
          <Image
            className="border border-border"
            src="/pp.jpg"
            alt="stickman holding flower"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col justify-center items-center text-xs">
          <p className="p-2 border border-border my-2">mert</p>
          <p className="p-2 border border-border my-2">software engineer</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
