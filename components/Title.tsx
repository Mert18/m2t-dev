import Link from "next/link";
import React from "react";

const Title = () => {
  return (
    <div className="my-4 flex flex-col justify-center items-center">
      <Link href="/">
        <p className="text-xs">m2t.dev</p>
      </Link>

      <Link href="/alive" className="mt-2">
        <p className="text-xs">alive</p>
      </Link>
    </div>
  );
};

export default Title;
