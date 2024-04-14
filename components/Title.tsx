import Link from "next/link";
import React from "react";

const Title = () => {
  return (
    <div className="flex flex-col justify-center items-center text-light">
      <Link href="/">
        <p className="text-xl">m2t.dev</p>
      </Link>
    </div>
  );
};

export default Title;
