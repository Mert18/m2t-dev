import Container from "../components/Container";
import NowPlaying from "../components/NowPlaying";
import Tracks from "../components/TopTracks";
import classes from "../styles/tmi.module.css";

export default function Tmi() {
  return (
    <Container>
      <div className={classes.tmi}>
        <div className={classes.spotify}>
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
