import Head from "next/head";
import Link from "next/link";
import classes from "./post.module.css";
import Image from "next/image";

export default function Post({ children, frontMatter }) {
  const { title, description, image, date } = frontMatter;
  return (
    <div className={classes.post}>
      <Head>
        <title>{title}</title>
      </Head>

      <header className={classes.header}>
        <div className={classes.header__img}>
          <Image
            src={image}
            alt={description}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={classes.header__text}>
          <h1>{title}</h1>
          <p>{date}</p>
        </div>
      </header>

      <main className={classes.main}>
        <div className={classes.main__content}>{children}</div>
        <p className={classes.back}>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </p>
      </main>
    </div>
  );
}
