import Container from "../components/Container";
import Spotify from "../components/Spotify";
import Chart from "../components/Chart";

export default function Tmi({ data }) {
  return (
    <Container
      title="Too Much Information - Mert Uyğur"
      description="Too much information about me. Happiness graph and spotify statistics."
    >
      <Chart data={data} />
      <Spotify />
    </Container>
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
