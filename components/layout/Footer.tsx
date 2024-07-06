import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-secondary h-20">
      <Link href="https://github.com/Mert18/m2t-dev" target="_blank" className="text-background">Github</Link>
    </div>
  );
};

export default Footer;
