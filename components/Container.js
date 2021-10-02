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
    description: `Software Developer, Front-end Developer`,
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
          ? { gridTemplateColumns: "1fr 1fr" }
          : { gridTemplateColumns: "2fr 1fr" }
      }
    >
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://merd.dev${router.asPath}`} />
        <link rel="canonical" href={`https://merd.dev${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Lee Robinson" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      {width > 1100 ? (
        <header className={classes.sidebar}>
          <div className={classes.sidebarwrapper}>
            <div className={classes.sidebartitle}>
              <h1>Mert UYĞUR</h1>
              <p>Frontend Developer</p>
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
                    <a>TMI</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ills">
                    <a>ILLS</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      ) : (
        <div
          onClick={mobileMenuVisibleHandler}
          className={classes.hamburgermenu}
        >
          <div className={classes.hamburgerline}></div>
          <div className={classes.hamburgerline}></div>
          <div className={classes.hamburgerline}></div>
        </div>
      )}
      {mobileMenuVisible ? (
        <header className={classes.mobilemenu}>
          <ul className={classes.navbarlist}>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/resume">
                <a>Resume</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/tmi">
                <a>Tmi</a>
              </Link>
            </li>
            <li>
              <Link href="/ills">
                <a>Ills</a>
              </Link>
            </li>
          </ul>
        </header>
      ) : (
        ""
      )}

      <main className={classes.main} role="main">
        {children}
      </main>
      <footer
        className={classes.footer}
        style={
          router.asPath === "/"
            ? { gridTemplateColumns: "1fr 1fr" }
            : { gridTemplateColumns: "2fr 1fr" }
        }
      >
        {" "}
        <ul className={classes.footerright}>
          <li>
            <a href="https://github.com/Mert18">Github</a>
          </li>
          <li>
            <a href="https://github.com/Mert18/merd-dev">Source Code</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mert-u-8248ab135/">Linkedin</a>
          </li>
        </ul>
        <div className={classes.footerleft}></div>
      </footer>
    </div>
  );
}
