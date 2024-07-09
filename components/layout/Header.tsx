import React from "react";
import Navigation from "../header/Navigation";
import Title from "../header/Title";
import ThemeHandler from "../header/ThemeHandler";
import useMediaQuery from "@/hooks/useMediaQuery";
import HamburgerMenu from "../header/HamburgerMenu";
import LanguageHandler from "../header/LanguageHandler";

const Header = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <div
      className={`bg-primary flex items-center justify-between p-2 text-sm border-b border-secondary`}
    >
      <div className="flex justify-between items-center w-full relative">
        <Title />
        {isSmallScreen ? (
          <HamburgerMenu />
        ) : (
          <>
            <Navigation />
            <div className="flex justify-center  items-center">
              <LanguageHandler />
              <div className="p-2"></div>
              <ThemeHandler />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
