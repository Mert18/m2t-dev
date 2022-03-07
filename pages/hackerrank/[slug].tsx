import { GetStaticPaths, GetStaticProps } from "next";
import { getAllFiles, getSingleFile } from "../../lib/hackerrank";
import Layout from "../../components/Layout";
import { useEffect } from "react";
import Prism from "prismjs";
import { useRouter } from "next/router";
import styled from "styled-components";

const Hackerrank = styled.div`
  display: grid;
  grid-template-columns: auto 50vw auto;
  grid-template-rows: 10vh auto auto;
  grid-template-areas:
    ". . ."
    ". text ."
    ". code .";
  background: var(--primary);

`

const HackerrankTitle = styled.div`
  grid-area: text;
  color: var(--secondary);

`

const HackerrankCode = styled.pre`
  grid-area: code;
  -webkit-box-shadow: -1px 1px 35px -12px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 1px 35px -12px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 1px 35px -12px rgba(0, 0, 0, 0.75);


`


export default function Solution({ file }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const router = useRouter();
  const myroute = router.query.slug.toString().replace(/\.js/, "");
  return (
    <Layout>
      <Hackerrank >
        <HackerrankTitle >
          <h2>Hackerrank Javascript Solutions</h2>
          <p>Javascript solution for hackerrank question {myroute}</p>
        </HackerrankTitle>
        <HackerrankCode>
          <code className="language-js">{file}</code>
        </HackerrankCode>
      </Hackerrank>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = await getAllFiles();
  files.filter((el: any) => el.path.endsWith("js"));

  const paths = files.map((file: any) => ({
    params: { slug: file.path },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const file = await getSingleFile(params.slug);
  return {
    props: {
      file,
    },
  };
};
