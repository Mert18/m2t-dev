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
    <Link href={href} target="_blank" className="m-2 w-12 h-12 flex justify-center p-2 bg-dark rounded-md hover:bg-lighter">
      <Image
        className="rounded-full"
        src={src}
        alt={alt}
        width={50}
        height={50}
      />
    </Link>
  );
};

export default ExternalLinkIcon;
