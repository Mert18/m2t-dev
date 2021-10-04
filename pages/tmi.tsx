import Container from "../components/Container";
import Graph from "../components/HappinessGraph";
import NowPlaying from "../components/NowPlaying";
import Tracks from "../components/TopTracks";
import classes from "../styles/tmi.module.css";

export default function Tmi() {
  return (
    <Container>
      <div className={classes.tmi}>
        <div>
          <Graph />
        </div>
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
