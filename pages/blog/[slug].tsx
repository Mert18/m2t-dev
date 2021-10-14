import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import CustomLink from "../../components/CustomLink";
import Container from "../../components/Container";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import classes from "../../styles/blog.module.css";

const MyH1 = (props) => <h1 style={{ color: "#db7b45" }} {...props} />;
const MyH2 = (props) => <h2 style={{ color: "#1d0c35" }} {...props} />;

const components = {
  h1: MyH1,
  h2: MyH2,
  a: CustomLink,
  Head,
};

export default function PostPage({ source, frontMatter }) {
  return (
    <Container>
      <div className={classes.bloglayout}>
        <div className={classes.blogpostheader}>
          <h1 style={{ color: "#db7b45" }}>{frontMatter.title}</h1>
          {frontMatter.description && (
            <p className={classes.blogpostdesc}>{frontMatter.description}</p>
          )}
          {frontMatter.date && (
            <p className={classes.blogdate}>{frontMatter.date}</p>
          )}
        </div>
        <div className={classes.blogcontent}>
          <MDXRemote {...source} components={components} />
        </div>
        <div className={classes.goback}>
          <Link href="/">
            <a>👈 Go back home</a>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
