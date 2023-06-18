import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="py-5 flex-col justify-center items-center">
      {/* Hero */}
      <div className="flex justify-center items-center hover:-translate-y-1 transition-all hover:cursor-pointer">
        <Link href="/">
          <h1 className="text-sm font-bold">m2t.dev</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
