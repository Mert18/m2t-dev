import classes from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import fs from "fs";
import grayMatter from "gray-matter";
import Image from "next/image";

export default function Home({ posts }) {
  return (
    <section className={classes.home}>
      <Head>
        <title>Mert Uygur Web Developer Blog</title>
        <meta name="description" content="Web, frontend developer blog" />
      </Head>

      <main className={classes.content}>
        <div className={classes.hero}>
          <div className={classes.hero__img}>
            <Image
              src="/images/assets/ill.svg"
              alt="people"
              width="450px"
              height="450px"
            />
          </div>
          <div className={classes.hero__txt}>
            <h1>
              Hi, my name is <span>Mert</span>. I am a{" "}
              <span>Frontend Developer</span>.
            </h1>
            <p>I love websites, music and typography.</p>
          </div>
        </div>
        <div className={classes.posts}>
          <div className={classes.sectiontitle}>
            <h2>Latest Blog Posts</h2>
          </div>
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
        </div>

        <div className={classes.elsewhere}>
          <div className={classes.links}>
            <a
              href="https://github.com/Mert18"
              rel="noreferrer noopener"
              target="_blank"
            >
              <div className={classes.link}>
                <Image
                  src="/images/icons/github.svg"
                  width="30px"
                  height="30px"
                  alt="github"
                />
                <p>Github</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/mert-u-8248ab135/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <div className={classes.link}>
                <Image
                  src="/images/icons/linkedin.svg"
                  width="30px"
                  height="30px"
                  alt="linkedin"
                />
                <p>Linkedin</p>
              </div>
            </a>
          </div>
        </div>
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
