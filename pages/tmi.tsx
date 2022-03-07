import Layout from "../components/Layout";
import Spotify from "../components/Spotify";
import Chart from "../components/Chart";
import styled from "styled-components";

const TmiWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "chart"
  "spotify";

  background: var(--primary);

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "chart"
    "spotify";
  }
`;

export default function Tmi({ data }) {
  return (
    <Layout
      title="Too Much Information - Mert Uyğur"
      description="Too much information about me. Happiness graph and spotify statistics."
    >
      <TmiWrapper>
        <Chart data={data} />
        <Spotify />
      </TmiWrapper>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(`https://merd.dev/api/data`);
  const data = await response.json();

  return {
    props: { data },
    revalidate: 60,
  };
};
