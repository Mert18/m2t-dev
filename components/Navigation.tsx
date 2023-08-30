import Image from "next/image";
import Link from "next/link";
import React from "react";
import ExternalLinkIcon from "./ExternalLinkIcon";

const Navigation = () => {
  return (
    <div className="flex justify-center items-center w-2/5 p-2">
      <div className="flex justify-center items-center mx-4">
        <ExternalLinkIcon
          href="https://www.hackerrank.com/mertuygur02"
          src="/icon/hackerrank.svg"
          alt="hackerrank logo"
        />
        <ExternalLinkIcon
          href="https://www.linkedin.com/in/mert-u-8248ab135"
          src="/icon/linkedin.svg"
          alt="linkedin logo"
        />
      </div>
      <div className="mx-4">
        <Link href="/">
          <Image
            className="border border-border rounded-full"
            src="/pp.jpg"
            alt="stickman holding flower"
            width={100}
            height={100}
          />
        </Link>
      </div>

      <div className="flex justify-center items-center mx-4">
        <ExternalLinkIcon
          href="https://github.com/Mert18"
          src="/icon/github.svg"
          alt="github logo"
        />
        <ExternalLinkIcon
          href="https://stackoverflow.com/users/14037079/mert-uygur"
          src="/icon/stack-overflow.svg"
          alt="stack overflow logo"
        />
      </div>
    </div>
  );
};

export default Navigation;
