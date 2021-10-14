import { GetStaticPaths, GetStaticProps } from "next";
import { getAllFiles, getSingleFile } from "../../lib/hackerrank";
import Container from "../../components/Container";
import classes from "../../styles/hackerrank.module.css";
import { useEffect } from "react";
import Prism from "prismjs";

export default function Hackerrank({ file }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <Container>
      <div className={classes.hackerrank}>
        <pre>
          <code className="language-js">{file}</code>
        </pre>
      </div>
    </Container>
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
