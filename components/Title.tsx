import Link from "next/link";
import React from "react";

const Title = () => {
  return (
    <div className="my-4 flex flex-col justify-center items-center">
      <Link href="/alive" className="mt-2">
        <p className="text-xs">am i alive?</p>
      </Link>
    </div>
  );
};

export default Title;
