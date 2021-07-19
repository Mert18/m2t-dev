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
        <meta
          name="description"
          content="An experimental area of a web developer."
        />
      </Head>

      <main className={classes.content}>
        <ul className={classes.filteredposts}>
          {posts.map(({ title, description, path, date }) => {
            return (
              <li key={path} className={classes.filteredpost}>
                <Link href={path} key={path}>
                  <h3>{title}</h3>
                </Link>

                <p>{description}</p>
                <p>{date}</p>
              </li>
            );
          })}
        </ul>
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
  const posts = files.map((file) => {
    return {
      path: `./posts/${file.filename.replace(".mdx", "")}`,
      title: file.matter.data.title,
      description: file.matter.data.description,
      date: file.matter.data.date,
      image: file.matter.data.image,
    };
  });
  return {
    props: {
      posts,
    },
  };
}
