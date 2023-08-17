import AiTalksList from "@/components/ai-talks/AiTalksList";
import React from "react";

export const metadata = {
  title: "m2t.dev - AI Talks",
  description: "A Software Engineer Blog - AI Talks",
};

const AiTalks = () => {
  return (
    <div className="p-4 flex justify-center">
      <AiTalksList />
    </div>
  );
};

export default AiTalks;
