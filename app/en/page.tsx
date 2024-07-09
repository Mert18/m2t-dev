import FotorafShowcase from "@/components/fotoraf/FotorafShowcase";
import HighlightedPost from "@/components/post/HighlightedPost";
import HighlightedValk from "@/components/post/HighlightedValk";
import React from "react";

export const metadata = {
  title: "m2t.dev",
  description: "A Software Engineering Blog",
};

const Home = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col justify-center items-center">
        <div className="flex-1 w-full">
          <HighlightedPost />
        </div>
        <div className="flex-1 w-full">
          <HighlightedValk />
        </div>
      </div>
      <FotorafShowcase />
    </div>
  );
};

export default Home;
