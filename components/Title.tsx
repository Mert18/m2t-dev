import Link from "next/link";
import React from "react";

const Title = () => {
  return (
    <div className="flex flex-col justify-center items-center ml-4">
      <Link href="/">
        <p className="text-3xl text-white">m2t.dev</p>
      </Link>
    </div>
  );
};

export default Title;
