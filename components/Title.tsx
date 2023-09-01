import Link from "next/link";
import React from "react";

const Title = () => {
  return (
    <div className="my-4">
      <Link href="/">
        <p className="text-xs">m2t.dev</p>
      </Link>
    </div>
  );
};

export default Title;
