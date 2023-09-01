"use client";
import React, { useState } from "react";
import AllPosts from "@/components/post/AllPosts";

export const metadata = {
  title: "m2t.dev - Blog",
  description: "A Software Engineer Blog",
};

const Home = () => {
  const [filter, setFilter] = useState("all");
  return (
    <div>
      <div className="p-4 flex justify-center">
        <div></div>
        <AllPosts />
      </div>
    </div>
  );
};

export default Home;
