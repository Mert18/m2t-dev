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
              <ThemeHandler />
            </div>
          </>
        )}

        {/* <ProgressBar /> */}
        {/* <button
          onClick={() => changeTheme(theme === "theme1" ? "theme2" : "theme1")}
          style={{ backgroundColor: "var(--color-buttons)" }}
        >
          Toggle Theme
        </button> */}
        {/* <div className="p-4">
          <Link
            href="/fotoraf"
            className="text-white text-base underline my-2 z-10"
          >
            fotoraf
          </Link>
        </div> */}
      </div>
      {/* <Image
        src="/euras-blackbird.png"
        alt="eurasian blackbird"
        width={150}
        height={150}
        className="rounded-sm p-1 opacity-20 absolute right-1/4 -bottom-2 pointer-events-none"
      /> */}
    </div>
  );
};

export default Header;
