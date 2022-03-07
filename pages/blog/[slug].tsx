import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import styled from "styled-components";
import CustomLink from "../../components/Blog/CustomLink";
import Layout from "../../components/Layout";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";

const PostPageWrapper = styled.div`
  background: var(--primary);
`;

const PostHeader = styled.div`
  background: var(--flavor);
  margin-top: -1.4rem;
  min-height: 30vh;
  color: var(--secondary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.4rem;
  padding: 2rem;
  margin-bottom: 3rem;
`;

const PostMain = styled.div`
  color: var(--secondary);
  display: grid;
  grid-template-columns: 3vw 50vw auto;
  grid-template-rows: 1fr;
  grid-template-areas: ". post info";

  @media(max-width: 1100px){
    grid-template-columns: 5vw auto 5vw;
    grid-template-areas: ". post .";
  }
`;
const PostText = styled.div`
  grid-area: post;
  font-size: 1.2rem;
  font-weight: 400;
`

const Info = styled.div`
  grid-area: info;
  color: var(--secondary);
`;

const PostFooter = styled.div`
  color: var(--secondary);
`;

const MyH1 = (props) => <h1 style={{ color: "var(--tertiary)" }} {...props} />;
const MyH2 = (props) => <h2 style={{ color: "var(--tertiary)" }} {...props} />;

const components = {
  h1: MyH1,
  h2: MyH2,
  a: CustomLink,
  Head,
};

export default function PostPage({ source, frontMatter }) {
  return (
    <Layout>
      <PostPageWrapper>
        <PostHeader>
          <h1 style={{ color: "var(--tertiary)" }}>{frontMatter.title}</h1>
          {frontMatter.description && <p>{frontMatter.description}</p>}
          {frontMatter.date && <p>{frontMatter.date}</p>}
        </PostHeader>
        <PostMain>
        <PostText>
          <MDXRemote {...source} components={components} />
          </PostText>
          <Info>
            
          </Info>
        </PostMain>
        <PostFooter>
          <Link href="/">
            <a>👈 Go back home</a>
          </Link>
        </PostFooter>
      </PostPageWrapper>
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
