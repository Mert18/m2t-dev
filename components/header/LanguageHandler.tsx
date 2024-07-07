"use client";
import useLanguage from "@/hooks/useLanguage";
import Link from "next/link";
import React from "react";

const LanguageHandler = () => {
  const language = useLanguage();
  return (
    <div className="flex flex-col justify-center items-center bg-primarylighter text-secondary border border-secondary rounded-md font-bold p-2 mr-2">
      <Link href={language === "en" ? "/tr" : "/en"}>
        {language === "en" ? "Türkçe" : "English"}
      </Link>
    </div>
  );
};

export default LanguageHandler;
