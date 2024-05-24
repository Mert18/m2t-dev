import Image from "next/image";
import Link from "next/link";
import React from "react";
import ExternalLinkIcon from "./ExternalLinkIcon";

const Navigation = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center">
      {/* Profile Picture */}
      <div className="mx-4 min-w-max">
        <Link
          href="/"
          className="w-20 flex justify-center items-center bg-light"
        >
          <Image
            className="rounded-sm p-1"
            src="/icon/frog.jpg"
            alt="stickman holding flower"
            width={100}
            height={100}
          />
        </Link>
      </div>
      
      <div className="flex justify-center items-center">
        <ExternalLinkIcon
          href="https://www.linkedin.com/in/mert-u-8248ab135"
          src="/icon/linkedin.svg"
          alt="linkedin logo"
        />
      </div>
      
      <div className="flex justify-center items-center">
        <ExternalLinkIcon
          href="https://github.com/Mert18"
          src="/icon/github.svg"
          alt="github logo"
        />
      </div>
    </div>
  );
};

export default Navigation;
