"use client";
import useLanguage from "@/hooks/useLanguage";
import Link from "next/link";
import React from "react";
import { usePathname } from 'next/navigation'

const LanguageHandler = () => {
  const pathname = usePathname()
  const language = useLanguage();
  return (
    <div className="flex flex-col justify-center items-center bg-primarylighter text-secondary border border-secondary rounded-md font-bold p-2">
      <Link href={language === "tr" ? pathname.replace("/tr", "/en") : pathname.replace("/en", "/tr")}>
        {language === "en" ? "Türkçe" : "English"}
      </Link>
    </div>
  );
};

export default LanguageHandler;
