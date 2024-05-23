import React from "react";
import Navigation from "../Navigation";
import Title from "../Title";
import ProgressBar from "../ProgressBar";
import Link from "next/link";

const Header = () => {
  return (
    <div className={`flex flex-col justify-evenly items-center h-72 bg-greenl`}>
      <Title />
      <Navigation />
      <ProgressBar />
      <Link href="/fotoraf" className="text-dark text-xs underline my-2">fotoraf</Link>
    </div>
  );
};

export default Header;
