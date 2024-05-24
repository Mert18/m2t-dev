import React from "react";
import Navigation from "../Navigation";
import Title from "../Title";
import ProgressBar from "../ProgressBar";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className={`flex lg:flex-row flex-col lg:items-start items-center h-96 bg-greenl justify-between relative overflow-hidden`}>
      <div className="flex flex-col justify-evenly lg:items-start items-center h-full">
        <Title />
        <Navigation />
        <ProgressBar />
        <div className="p-4">
        <Link href="/fotoraf" className="text-white text-base underline my-2 z-10">
          fotoraf
        </Link>
      </div>
      </div>
      <Image src="/euras-blackbird.png" alt="eurasian blackbird" width={150} height={150} className="rounded-sm p-1 opacity-20 absolute right-1/4 -bottom-2" />
      
    </div>
  );
};

export default Header;
