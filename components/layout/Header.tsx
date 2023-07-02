import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center h-64">
      {/* Hero */}
      <div className="flex flex-col justify-center items-center w-2/5 p-2">
        <Link href="/">
          <Image
            className="border border-border"
            src="/pp.jpg"
            alt="stickman holding flower"
            width={100}
            height={100}
          />
        </Link>
        <div className="flex flex-col justify-center items-center text-xs">
          <p className="p-2">mert</p>
          <p className="p-2">software engineer</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
