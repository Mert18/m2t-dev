import React from "react";
import Navigation from "../Navigation";
import Title from "../Title";

const Header = () => {
  return (
    <div className="flex flex-col justify-evenly items-center h-72 bg-dark">
      <Title />
      <Navigation />
    </div>
  );
};

export default Header;
