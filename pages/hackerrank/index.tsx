import classes from "../../styles/hackerrank.module.css";
import { GetStaticPaths } from "next";
import { getAllFiles } from "../../lib/hackerrank";
import Link from "next/link";
import Container from "../../components/Container";

export default function Hackerrank({ files }) {
  console.log(files.filter((el) => el.name.endsWith(".js")));
  return (
    <Container>
      <section className={classes.hackerranksols}>
        <h1>Hackerrank Javascript Solutions</h1>
        <ul>
          {files
            .filter((el) => el.name.endsWith(".js"))
            .map((el) => {
              return (
                <li key={el.name}>
                  <Link href={`/hackerrank/${el.name}`}>
                    {el.name.replace(/\.js/, "")}
                  </Link>
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
