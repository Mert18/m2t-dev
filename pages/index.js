import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      console.log(
        "Actually I haven't got time to develop this. So it is not under construction but sssh!"
      );
    }, 2000);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Merd</title>
        <meta
          name="description"
          content="Software Developer portfolio website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.box}>
        <div className={styles.name}>
          <p>Under construction :)</p>
        </div>
        <ul className={styles.social}>
          <li>
            <a
              href="https://github.com/mert18"
              target="_blank"
              rel="noreferrer"
            >
              <Image width="35px" height="35px" src="/github.svg" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mert-u-8248ab135/"
              target="_blank"
              rel="noreferrer"
            >
              <Image width="30px" height="30px" src="/linkedin.svg" />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.white}></div>
    </div>
  );
}
