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
    <div className={classes.container}>
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
      {width > 900 ? (
        <header className={classes.header}>
          <div className={classes.headerupper}>
            <div className={classes.headerupper__options}>
              <ul className={classes.left}>
                <li className={classes.titlelink}>WHERE I AM</li>
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
                  <a href="" target="_blank" rel="noreferrer">
                    LINKEDIN
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" rel="noreferrer">
                    HACKERRANK
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" rel="noreferrer">
                    FRONTENDMASTER
                  </a>
                </li>
              </ul>
            </div>
            <div className={classes.headerupper__main}>
              <h1>MERD</h1>
              <p>Front End Engineer</p>
            </div>

            <div className={classes.headerupper__options}>
              <ul>
                <li className={classes.titlelink}>THEMES</li>
                <li>
                  <button>LES JOURS TRISTES</button>
                </li>
                <li>
                  <button>BEYOND</button>
                </li>
                <li>
                  <button>ANKARA RUZGARI</button>
                </li>
              </ul>
            </div>
          </div>
          <nav className={classes.headerlower}>
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
          </nav>
        </header>
      ) : (
        <header className={classes.mobileheader}>
          <div className={classes.mobileheader__main}>
            <h1>MERD</h1>
            <p>Front End Engineer</p>
          </div>
          <div
            className={classes.mobileheader__lines}
            onClick={mobileMenuVisibleHandler}
          >
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
      <footer className={classes.footer}></footer>
    </div>
  );
}
