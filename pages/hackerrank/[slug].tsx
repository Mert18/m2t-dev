import { GetStaticPaths, GetStaticProps } from "next";
import { getAllFiles, getSingleFile } from "../../lib/hackerrank";
import Container from "../../components/Container";

export default function Hackerrank({ file }) {
  console.log(file);
  return <Container></Container>;
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
