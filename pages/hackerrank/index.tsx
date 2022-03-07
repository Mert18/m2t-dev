import classes from "../../styles/hackerrank.module.css";
import Link from "next/link";
import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import styled from "styled-components";
import SectionHeader from "../../components/SectionHeader";

const HackerrankWrapper = styled.div`
  background: var(--primary);
  margin-top: -2rem;
  color: var(--secondary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const List = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ListItem = styled.div`
  padding: 0.4rem;
  display: flex;
  justify-content: center;
`;

const StyledLink = styled.a`
  background: var(--flavor);
  transition: all 0.3s ease;
  padding: 0.4rem;
  &:hover {
    transition: all 0.3s ease;
    color: var(--tertiary);
    cursor: pointer;
  }
`;

export default function Hackerrank({ files }) {
  const [myFiles, setMyFiles] = useState(files);

  return (
    <Layout>
      <HackerrankWrapper>
        <SectionHeader title="Hackerrank Javascript Solutions" />
        <List>
          {myFiles
            .filter((el: any) => el.name.endsWith(".js"))
            .map((el: any) => {
              return (
                <ListItem key={el.name}>
                  <Link href={`/hackerrank/${el.name}`}>
                    <StyledLink>{el.name.replace(/\.js/, "")}</StyledLink>
                  </Link>
                </ListItem>
              );
            })}
        </List>
      </HackerrankWrapper>
    </Layout>
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
