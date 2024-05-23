import React from "react";
import AllPosts from "@/components/post/AllPosts";

export const metadata = {
  title: "m2t.dev | blog",
  description: "A Software Engineering Blog",
};

const Home = () => {
  return (
    <AllPosts />
  );
};

export default Home;
