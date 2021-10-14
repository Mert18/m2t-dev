import { GetStaticPaths, GetStaticProps } from "next";
import { getAllFiles, getSingleFile } from "../../lib/hackerrank";
import Container from "../../components/Container";
import classes from "../../styles/hackerrank.module.css";
import { useEffect } from "react";
import Prism from "prismjs";
import { useRouter } from "next/router";

export default function Solution({ file }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const router = useRouter();
  const myroute = router.query.slug.toString().replace(/\.js/, "");
  return (
    <Container>
      <div className={classes.hackerrank}>
        <div className={classes.hackerrank__title}>
          <h2>Hackerrank Javascript Solutions</h2>
          <p>Javascript solution for hackerrank question {myroute}</p>
        </div>
        <pre className={classes.hackerrank__code}>
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
