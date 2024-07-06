import Link from "next/link";
import React from "react";

const NavigationLink = ({ href, text }: any) => {
  return (
    <Link href={href} className="block p-2 hover:underline">
      {text}
    </Link>
  );
};

export default NavigationLink;
