import classes from "../../styles/hackerrank.module.css";
import { GetStaticPaths } from "next";
import { getAllFiles } from "../../lib/hackerrank";
import Link from "next/link";
import Container from "../../components/Container";
import { useState, useEffect } from "react";

export default function Hackerrank({ files }) {
  const [searchParams, setSearchParams] = useState("");
  const [myFiles, setMyFiles] = useState(files);

  useEffect(() => {
    if (searchParams == "") {
      setMyFiles(files);
    } else {
      setMyFiles(myFiles.filter((el: any) => el.name.startsWith(searchParams)));
    }
  }, [searchParams]);

  return (
    <Container>
      <section className={classes.hackerranksols}>
        <h1>Hackerrank Javascript Solutions</h1>
        <div className={classes.hackerranksols__search}>
          <input
            type="text"
            onChange={(e: any) => setSearchParams(e.target.value)}
          />
        </div>
        <ul>
          {myFiles
            .filter((el: any) => el.name.endsWith(".js"))
            .map((el: any) => {
              return (
                <li key={el.name}>
                  <Link href={`/hackerrank/${el.name}`}>.</Link>
                </li>
              );
            })}
        </ul>
      </section>
    </Container>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(
    "https://api.github.com/repos/Mert18/hackerrank-js/contents"
  );
  const files = await response.json();

  return {
    props: { files },
  };
};
