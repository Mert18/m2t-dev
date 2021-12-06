import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import classes from "./styles/container.module.css";
import Link from "next/link";
import useWindowDimensions from "./useWindowDimensions";
import Prism from "prismjs";

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const { height, width } = useWindowDimensions();
  useEffect(() => {
    setMounted(true);
    Prism.highlightAll();
    if (router.asPath === "/") {
      setCurrentPath("HOME");
    } else {
      let myroute = router.asPath.substring(1, 11).toUpperCase();
      setCurrentPath(myroute);
    }
    if (width > 1100) {
      setMobileMenuVisible(false);
    }
  }, [router, width]);

  const { children, ...customMeta } = props;

  const meta = {
    title: "Mert Uygur Personal Website",
    description: `Software Developer, Full Stack Developer`,
    type: "website",
    ...customMeta,
  };

  const mobileMenuVisibleHandler = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };
  return (
    <div
      className={classes.container}
      style={
        router.asPath === "/"
          ? width > 1100
            ? { gridTemplateColumns: "2fr 1fr" }
            : width > 800
            ? { gridTemplateColumns: "2fr 1fr" }
            : { gridTemplateColumns: "1fr", gridTemplateRows: "auto auto auto" }
          : width > 1100
          ? { gridTemplateColumns: "3fr 1fr" }
          : width > 800
          ? { gridTemplateColumns: "3fr 1fr" }
          : { gridTemplateColumns: "1fr", gridTemplateRows: "auto auto auto" }
      }
    >
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://merd.dev${router.asPath}`} />
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
      {width > 800 ? (
        <header className={classes.sidebar}>
          <div className={classes.sidebarwrapper}>
            <div className={classes.sidebartitle}>
              <h1>Mert UYĞUR</h1>
              <p>Full Stack Developer</p>
            </div>
            <nav className={classes.navbar}>
              <ul className={classes.navbarlist}>
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
                  <Link href="/projects">
                    <a>PROJECTS</a>
                  </Link>
                </li>
                <li className={classes.tmiabs}>
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
            </nav>
          </div>
          <ul className={classes.sociallinks}>
            <li>
              <a href="https://github.com/Mert18">Github</a>
            </li>
            <li>
              <a href="https://github.com/Mert18/merd-dev">Source Code</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mert-u-8248ab135/">
                Linkedin
              </a>
            </li>
          </ul>
        </header>
      ) : (
        <header className={classes.mobileheader}>
          <Link href="/">
            <div className={classes.mobileheadertitle}>
              <h1>Mert UYĞUR</h1>
              <p>Full Stack Developer</p>
            </div>
          </Link>
          <div
            className={classes.mobileheaderlines}
            onClick={mobileMenuVisibleHandler}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          {mobileMenuVisible ? (
            <ul className={classes.mobilemenu}>
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
                <Link href="/projects">
                  <a>PROJECTS</a>
                </Link>
              </li>
              <li className={classes.tmiabs}>
                <Link href="/tmi">
                  <a>TMI</a>
                </Link>
              </li>
              <li>
                <Link href="/ills">
                  <a>ILLS</a>
                </Link>
              </li>
            </ul>
          ) : (
            ""
          )}
        </header>
      )}
      <main className={classes.main} role="main">
        {children}
      </main>
      {width > 800 ? (
        <footer
          className={classes.footer}
          style={
            router.asPath === "/"
              ? width > 1100
                ? { gridTemplateColumns: "2fr 1fr" }
                : { gridTemplateColumns: "2fr 1fr" }
              : width > 1100
              ? { gridTemplateColumns: "3fr 1fr" }
              : { gridTemplateColumns: "3fr 1fr" }
          }
        >
          {" "}
          <div className={classes.footerright}></div>
          <div className={classes.footerleft}></div>
        </footer>
      ) : (
        ""
      )}
    </div>
  );
}
