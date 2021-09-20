import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import CustomLink from "../../components/CustomLink";
import Layout from "../../components/Container";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import classes from "../../styles/blog.module.css";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Head,
};

export default function PostPage({ source, frontMatter }) {
  return (
    <Layout>
      <div className={classes.bloglayout}>
        <div className={classes.blogpostheader}>
          <h1>{frontMatter.title}</h1>
          {frontMatter.description && (
            <p className={classes.blogpostdesc}>{frontMatter.description}</p>
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
    </Layout>
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
