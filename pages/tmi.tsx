import Container from "../components/Container";
import NowPlaying from "../components/NowPlaying";
import Tracks from "../components/TopTracks";
import classes from "../styles/tmi.module.css";

export default function Tmi({ data }) {
  console.log(data);
  return (
    <Container
      title="Too Much Information - Mert Uygur"
      description="Too much information about mert uygur. Spotify top songs."
    >
      <div className={classes.tmi}>
        <div className={classes.spotify}>
          <div className={classes.toptrackstitle}>Top Tracks</div>
          <div className={classes.toptracks}>
            <Tracks />
          </div>
          <div className={classes.nowplaying}>
            <NowPlaying />
          </div>
        </div>
      </div>
    </Container>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(`https://merd.dev/api/data`);
  const data = await response.json();

  return {
    props: { data },
  };
};
