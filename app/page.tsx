import FotorafShowcase from "@/components/fotoraf/FotorafShowcase";
import HighlightedPost from "@/components/post/HighlightedPost";
import React from "react";

export const metadata = {
  title: "m2t.dev | blog",
  description: "A Software Engineering Blog",
};

const Home = () => {
  return (
    <div>
      <HighlightedPost />
      <FotorafShowcase />
    </div>
  );
};

export default Home;
