import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import classes from "../styles/ills.module.css";
import fs from "fs";
import path from "path";
import Image from "next/image";

export default function Ills({ fileNames }) {
  return (
    <Layout
      title="Illustrations - Mert Uygur"
      description="Illustrations by Mert Uygur. Drawn with Adobe Illustrator."
    >
      <div className={classes.ills}>
        <ul className={classes.illslist}>
          {fileNames.map((file) => {
            return (
              <li key={file}>
                <Image
                  src={`/ills/${file}`}
                  width="1024px"
                  height="1024px"
                  alt={file}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const directory = path.join(process.cwd(), "public", "ills");

  const fileNames = fs.readdirSync(directory);

  return {
    props: { fileNames },
  };
};
