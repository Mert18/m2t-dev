'use client'
import React from "react";
import NavigationLink from "./NavigationLink";
import useLanguage from "@/hooks/useLanguage";

const Navigation = () => {
  const language = useLanguage();
  return (
    <div className="custom-mr flex justify-center items-center bg-primarylighter text-secondary border border-secondary rounded-md font-bold">
      <NavigationLink href={`/${language}`} text={language == "en" ? "Home" : "Ana Sayfa"} />
      <NavigationLink href={`/${language}/blog`} text="Blog" />
      <NavigationLink href={`/${language}/fotoraf`} text="Fotoraf" />
      <NavigationLink href={`/${language}/valks`} text="Valks" />
      {/* Profile Picture */}
      {/* <div className="mx-4 min-w-max">
        <Link
          href="/"
          className="w-20 flex justify-center items-center bg-light"
        >
          <Image
            className="rounded-sm p-1 pointer-events-none"
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
      </div> */}
    </div>
  );
};

export default Navigation;
