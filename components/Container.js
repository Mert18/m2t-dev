import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Footer from "./Footer";
import classes from "./styles/container.module.css";
import Link from "next/link";
import useWindowDimensions from "./useWindowDimensions";
import Image from "next/image";

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const { height, width } = useWindowDimensions();
  useEffect(() => {
    if (router.asPath === "/") {
      setCurrentPath("HOME");
    } else {
      let myroute = router.asPath
        .substring(1, router.asPath.length)
        .toUpperCase();
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
    <div className={classes.container}>
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
        <header className={classes.navbar}>
          <Link href={router.asPath}>
            <a>
              <h1 className={classes.headerpath}>{currentPath}</h1>
            </a>
          </Link>
          <ul className={classes.navbarlist}>
            <li>
              <Link href="/">
                <a>
                  H<span className={classes.remaining}>ome</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/resume">
                <a>
                  R<span className={classes.remaining}>esume</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>
                  B<span className={classes.remaining}>log</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a>
                  P<span className={classes.remaining}>rojects</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/tmi">
                <a>
                  T<span className={classes.remaining}>mi</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/ills">
                <a>
                  I<span className={classes.remaining}>lls</span>
                </a>
              </Link>
            </li>
          </ul>
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
      <Footer />
    </div>
  );
}
