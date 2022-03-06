import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import classes from "../styles/ills.module.css";
import fs from "fs";
import path from "path";
import Image from "next/image";
import styled from "styled-components";

const IllsWrapper = styled.div`
  min-height: 70vh;
  background: var(--primary);
  padding: 3rem;
`;

const IllsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
`;
const Ill = styled.li`
  align-self: center;
`;

const Ills = ({ fileNames }) => {
  return (
    <Layout
      title="Illustrations - Mert Uygur"
      description="Illustrations by Mert Uygur. Drawn with Adobe Illustrator."
    >
      <IllsWrapper>
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
