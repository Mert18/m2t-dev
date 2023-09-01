import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IExternalLinkIcon {
  href: string;
  src: string;
  alt: string;
}

const ExternalLinkIcon = ({ href, src, alt }: IExternalLinkIcon) => {
  return (
    <Link href={href} target="_blank" className="m-2 w-10 flex justify-center">
      <Image
        className="rounded-full"
        src={src}
        alt={alt}
        width={25}
        height={25}
      />
    </Link>
  );
};

export default ExternalLinkIcon;
