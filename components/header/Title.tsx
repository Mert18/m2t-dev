import Link from "next/link";
import React from "react";

const Title = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-primarylighter text-secondary border border-secondary rounded-md font-bold">
      <Link href="/" className="p-2">
        <p>m2t.dev</p>
      </Link>
    </div>
  );
};

export default Title;
