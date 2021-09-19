import React from "react";
import Container from "../components/Container";
import classes from "../styles/ills.module.css";
import fs from "fs";
import path from "path";
import Image from "next/image";

const Ills = ({ fileNames }) => {
  return (
    <Container>
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
    </Container>
  );
};

export function getStaticProps() {
  const directory = path.join(process.cwd(), "public", "ills");

  const fileNames = fs.readdirSync(directory);

  return {
    props: { fileNames },
  };
}

export default Ills;
