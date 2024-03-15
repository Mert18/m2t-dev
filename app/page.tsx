import React from "react";
import AllPosts from "@/components/post/AllPosts";

export const metadata = {
  title: "m2t.dev | blog",
  description: "A Software Engineering Blog",
};

const Home = () => {
  return (
    <div>
      <div className="p-4 flex justify-center">
        <AllPosts />
      </div>
    </div>
  );
};

export default Home;
