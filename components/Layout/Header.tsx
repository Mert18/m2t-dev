import React, { useState, useEffect } from "react";
import {
  HeaderLower,
  HeaderUpper,
  HeaderUpperOptions,
  HeaderUpperMain,
  HeaderUpperOptionsTitle,
  HeaderWrapper,
  MobileHeader,
  MobileHeaderIcon,
  MobileHeaderMain,
  MobileMenu,
  Sticky,
} from "./Header.styles";
import Cookies from "js-cookie";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Link from "next/link";

type HeaderProps = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({ theme, setTheme }: HeaderProps) => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const right = true;

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (width > 1100) {
      setMobileMenuVisible(false);
    }
    const changeNavbar = () => {
      if (window.scrollY >= 390) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", changeNavbar);
  }, [width]);
  const mobileMenuVisibleHandler = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return width > 900 ? (
    <div>
      <HeaderWrapper>
        <HeaderUpper>
          <HeaderUpperOptions right={false}>
            <HeaderUpperOptionsTitle>ME ELSEWHERE</HeaderUpperOptionsTitle>
            <li>
              <a
                href="https://github.com/Mert18"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mert-u-8248ab135/"
                target="_blank"
                rel="noreferrer"
              >
                LINKEDIN
              </a>
            </li>
            <li>
              <a
                href="https://www.hackerrank.com/mertuygur02"
                target="_blank"
                rel="noreferrer"
              >
                HACKERRANK
              </a>
            </li>
            <li>
              <a
                href="https://www.frontendmentor.io/profile/Mert18"
                target="_blank"
                rel="noreferrer"
              >
                FRONTENDMENTOR
              </a>
            </li>
          </HeaderUpperOptions>
          <HeaderUpperMain>
            <h1>MERD</h1>
            <p>Software Engineer</p>
          </HeaderUpperMain>

          <HeaderUpperOptions right={true}>
            <HeaderUpperOptionsTitle>THEMES</HeaderUpperOptionsTitle>
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setTheme("ankararuzgari");
                  Cookies.set("theme", "ankararuzgari");
                }}
              >
                ANKARA RUZGARI
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setTheme("lesjourstristes");
                  Cookies.set("theme", "lesjourstristes");
                }}
              >
                LES JOURS TRISTES
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setTheme("beyond");
                  Cookies.set("theme", "beyond");
                }}
              >
                BEYOND
              </button>
            </li>

            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setTheme("sultaniyegah");
                  Cookies.set("theme", "sultaniyegah");
                }}
              >
                SULTAN-I YEGAH
              </button>
            </li>
          </HeaderUpperOptions>
        </HeaderUpper>

        {navbar ? (
          <Sticky>
            <ul>
              <li>
                <Link href="/">
                  <a>HOME</a>
                </Link>
              </li>
              <li>
                <Link href="/me">
                  <a>ME</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a>BLOG</a>
                </Link>
              </li>
              <li>
                <Link href="/tmi">
                  <a>TOO MUCH INFORMATION</a>
                </Link>
              </li>
              <li>
                <Link href="/ills">
                  <a>ILLUSTRATIONS</a>
                </Link>
              </li>
              <li>
                <Link href="/hackerrank">
                  <a>HACKERRANK</a>
                </Link>
              </li>
            </ul>
          </Sticky>
        ) : (
          <HeaderLower>
            <ul>
              <li>
                <Link href="/">
                  <a>HOME</a>
                </Link>
              </li>
              <li>
                <Link href="/me">
                  <a>ME</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a>BLOG</a>
                </Link>
              </li>
              <li>
                <Link href="/tmi">
                  <a>TOO MUCH INFORMATION</a>
                </Link>
              </li>
              <li>
                <Link href="/ills">
                  <a>ILLUSTRATIONS</a>
                </Link>
              </li>
              <li>
                <Link href="/hackerrank">
                  <a>HACKERRANK</a>
                </Link>
              </li>
            </ul>
          </HeaderLower>
        )}
      </HeaderWrapper>
    </div>
  ) : (
    <div>
      <MobileHeader>
        <MobileHeaderMain>
          <h1>MERD</h1>
          <p>Software Engineer</p>
        </MobileHeaderMain>
        <MobileHeaderIcon onClick={mobileMenuVisibleHandler}>
          <div></div>
        </MobileHeaderIcon>
        {mobileMenuVisible ? (
          <MobileMenu>
            <li>
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>
            <li>
              <Link href="/me">
                <a>ME</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>BLOG</a>
              </Link>
            </li>
            <li>
              <Link href="/tmi">
                <a>TMI</a>
              </Link>
            </li>
            <li>
              <Link href="/ills">
                <a>ILLS</a>
              </Link>
            </li>
          </MobileMenu>
        ) : (
          ""
        )}
      </MobileHeader>
    </div>
  );
};
export default Header;
