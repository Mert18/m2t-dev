import React from "react";
import Navigation from "../Navigation";
import Title from "../Title";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center h-72">
      <Navigation />
      <Title />
    </div>
  );
};

export default Header;
