import classes from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import fs from "fs";
import grayMatter from "gray-matter";

export default function Home({ posts }) {
  return (
    <section className={classes.home}>
      <Head>
        <title>Mert Uygur Web Developer Blog</title>
        <meta name="description" content="Web, frontend developer blog" />
      </Head>

      <main className={classes.content}>
        <section className={classes.hero}>
          <p>
            Hi, my name is Mert. I am a{" "}
            <span id={classes.role}>Frontend Developer</span>.
          </p>
        </section>

        <section className={classes.filteredposts}>
          <p id={classes.title}>Latest Blog Posts</p>
          <ul className={classes.posts}>
            {posts.map(({ title, description, path, date }) => {
              return (
                <li key={path} className={classes.filteredpost}>
                  <Link href={path} key={path}>
                    <p id={classes.title}>{title}</p>
                  </Link>
                  <p>{date}</p>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </section>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "pages/posts");
  const filenames = await fs.readdirSync(
    postsDirectory,
    function (err, content) {
      if (err) {
        return err;
      } else {
        return content;
      }
    }
  );
  const files = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const content = await fs.readFileSync(
        filePath,
        "utf8",
        function (err, xyz) {
          if (err) {
            return err;
          } else {
            return xyz;
          }
        }
      );
      const matter = grayMatter(content);
      return {
        filename,
        matter,
      };
    })
  );

  const posts = files
    .map((file) => {
      return {
        path: `./posts/${file.filename.replace(".mdx", "")}`,
        title: file.matter.data.title,
        description: file.matter.data.description,
        date: file.matter.data.date,
      };
    })
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });

  return {
    props: {
      posts,
    },
  };
}
