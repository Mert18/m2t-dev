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
      <div className="flex lg:flex-row flex-col justify-center items-start">
        <div className="flex-1 w-full my-2 md:m-2 m-0">
          <h3 className="uppercase font-bold text-text text-xs">Posts</h3>
          <div>
            <HighlightedPost />
          </div>
        </div>
        <div className="flex-1 w-full my-2 md:m-2 m-0">
          <h3 className="uppercase font-bold text-text text-xs">Valks</h3>
          <div>
            <HighlightedValk />
          </div>
        </div>
      </div>
      <div className="flex-1 w-full my-2 md:m-2 m-0">
        <h3 className="uppercase font-bold text-text text-xs">Fotorafs</h3>
        <FotorafShowcase />
      </div>
    </div>
  );
};

export default Home;
