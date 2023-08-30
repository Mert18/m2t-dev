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
    <Link href={href} target="_blank" className="mx-2">
      <Image
        className="rounded-full"
        src={src}
        alt={alt}
        width={40}
        height={40}
      />
    </Link>
  );
};

export default ExternalLinkIcon;
