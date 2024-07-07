'use client'
import useLanguage from "@/hooks/useLanguage";
import Link from "next/link";
import React from "react";

const Title = () => {
  const language = useLanguage();
  return (
    <div className="flex flex-col justify-center items-center bg-primarylighter text-secondary border border-secondary rounded-md font-bold">
      <Link href={`/${language}`} className="p-2">
        <p>m2t.dev</p>
      </Link>
    </div>
  );
};

export default Title;
