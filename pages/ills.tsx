import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import fs from "fs";
import path from "path";
import Image from "next/image";
import {IllsWrapper, IllsList, Ill} from "../styles/ills.styles"
import SectionHeader from "../components/SectionHeader";


const Ills = ({ fileNames }) => {
  return (
    <Layout
      title="Illustrations - Mert Uygur"
      description="Illustrations by Mert Uygur. Drawn with Adobe Illustrator."
    >
      <IllsWrapper>
        <SectionHeader title="Illustrations" />
        <IllsList>
          {fileNames.map((file) => {
            return (
              <Ill key={file}>
                <Image
                  src={`/ills/${file}`}
                  alt={file}
                  width={1800}
                  height={1800}
                />
              </Ill>
            );
          })}
        </IllsList>
      </IllsWrapper>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const directory = path.join(process.cwd(), "public", "ills");

  const fileNames = fs.readdirSync(directory);

  return {
    props: { fileNames },
  };
};

export default Ills;
