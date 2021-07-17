import Head from "next/head";
import Link from "next/link";
import classes from "./post.module.css";

export default function Post({ children, frontMatter }) {
  const { title, description, date } = frontMatter;
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <h1>{title}</h1>
        <div>{children}</div>
        <p>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </p>
      </main>
    </div>
  );
}
