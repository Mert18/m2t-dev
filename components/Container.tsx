import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import useWindowDimensions from "./useWindowDimensions";
import Prism from "prismjs";
import { ThemeContext } from "../lib/context";
import Cookies from "js-cookie";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  font-weight: 400;
  min-height: 30vh;
  display: grid;
  grid-template-columns: minmax(0vh, 10vh) auto minmax(0, 10vh);
  grid-template-rows: 2vh auto auto 2vh;
  grid-template-areas:
    ". . ."
    "upper upper upper"
    "lower lower lower"
    ". . .";
  background: var(--primary);
`;

const HeaderUpper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  grid-area: upper;
  font-family: "Righteous", cursive;
`;

const HeaderLower = styled.div`
  grid-area: lower;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--secondary);

  & > ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;

    & > li {
      margin-right: 4rem;
      font-size: 1.1rem;
      & > a {
        transition: all 0.3s ease;
        &:hover {
          color: var(--tertiary);
          transition: all 0.3s ease;
        }
      }
      &:last-child {
        margin-right: 0rem;
      }
    }
  }
`;

const Sticky = styled.div`
  grid-area: lower;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--secondary);
  background: var(--primary);
  z-index: 9999;
  height: 10vh;
  position: fixed;
  top: 0;
  width: 100%;
  transition: 0.3s all ease;
  border-bottom: 4px solid var(--tertiary);

  & > ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;

    & > li {
      margin-right: 4rem;
      font-size: 1.1rem;

      & > a {
        transition: all 0.3s ease;
        &:hover {
          color: var(--tertiary);
          transition: all 0.3s ease;
        }
      }

      &:last-child {
        margin-right: 0rem;
      }
    }
  }
`;

const HeaderUpperOptions = styled.ul`
  & > li {
    margin-top: 0.4rem;
    & > a {
      color: var(--secondary);
      &:hover {
        color: var(--tertiary);
        transition: all 0.3s;
      }
    }

    & > button {
      transition: all 0.3s;
      border: none;
      outline: none;
      background: transparent;
      color: var(--secondary);
      font-size: 1.1rem;
      padding: 0;
      font-family: "Righteous", cursive;
      &:hover {
        color: var(--tertiary);
        transition: all 0.3s;
        cursor: pointer;
      }
    }
  }
`;

const HeaderUpperOptionsTitle = styled.li`
  color: var(--tertiary);
  font-weight: 600;
`;

const HeaderUpperMain = styled.div`
  position: relative;

  & > h1 {
    font-size: 6rem;
    color: var(--secondary);
  }

  & > p {
    position: absolute;
    bottom: 12%;
    right: 0%;
    padding: 0.7rem;
    font-size: 1.1rem;
    font-weight: 700;
    background: var(--tertiary);
    color: var(--secondary);
  }
`;

const MobileHeader = styled.header`
  display: grid;
  grid-template-columns: minmax(0vh, 10vh) auto minmax(0, 10vh);
  grid-template-rows: 2vh auto auto 4vh;
  grid-template-areas:
    ". . ."
    ". upper ."
    ". lower ."
    ". . .";
  position: relative;
  background: var(--primary);
  color: var(--secondary);
`;

const MobileHeaderMain = styled.div`
  position: relative;
  grid-area: upper;
  justify-self: center;

  & > h1 {
    font-size: 4rem;
  }

  & > p {
    position: absolute;
    bottom: 5%;
    right: -20%;
    padding: 0.4rem;
    font-size: 1rem;
    font-weight: 700;
    background: var(--tertiary);
    color: var(--secondary);
  }
`;

const MobileHeaderIcon = styled.div`
  & > div {
    position: absolute;
    top: 8%;
    left: 4%;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    background: var(--tertiary);
  }
`;

const MobileMenu = styled.ul`
  backdrop-filter: blur(2px);
  list-style: none;
  padding: 0rem;
  position: absolute;
  top: 80%;
  left: 0;
  width: 96vw;
  font-weight: 400;
  z-index: 999;

  & > li {
    height: 13vh;
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    & > a {
      display: block;
      min-width: 100%;
      min-height: 100%;
      text-align: center;
      padding-top: 2rem;
    }
  }
`;

const Footer = styled.footer`
  min-height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary);

  & > div > a {
    text-decoration: none;
    color: var(--secondary);
    transition: all 0.3s ease;

    &:hover {
      color: var(--tertiary);
      transition: all 0.3s ease;
    }
  }
`;

const Container = (props) => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [theme, setTheme] = useState(Cookies.get("theme"));
  const [navbar, setNavbar] = useState(false);

  const { height, width } = useWindowDimensions();
  useEffect(() => {
    setMounted(true);
    Prism.highlightAll();
    if (width > 1100) {
      setMobileMenuVisible(false);
    }
    const changeNavbar = () => {
      if (window.scrollY >= 380) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", changeNavbar);
  }, [router, width]);

  const { children, ...customMeta } = props;

  const meta = {
    title: "Mert Uygur Personal Website",
    description: `Software Developer, Software Engineer`,
    type: "website",
    ...customMeta,
  };

  const mobileMenuVisibleHandler = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div data-theme={theme}>
        <Head>
          <title>{meta.title}</title>
          <meta name="robots" content="follow, index" />
          <meta content={meta.description} name="description" />
          <meta
            property="og:url"
            content={`https://merd.dev${router.asPath}`}
          />
          <link rel="canonical" href={`https://merd.dev${router.asPath}`} />
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content="Mert Uygur" />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          {meta.date && (
            <meta property="article:published_time" content={meta.date} />
          )}
        </Head>
        {width > 900 ? (
          <HeaderWrapper>
            <HeaderUpper>
              <HeaderUpperOptions>
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

              <HeaderUpperOptions>
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
        ) : (
          <MobileHeader>
            <MobileHeaderMain>
              <h1>MERD</h1>
              <p>Front End Engineer</p>
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
        )}
        <main role="main">{children}</main>
        <Footer>
          <div>
            <a
              href="https://github.com/Mert18/merd-dev"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
          </div>
        </Footer>
      </div>
    </ThemeContext.Provider>
  );
};

export default Container;
