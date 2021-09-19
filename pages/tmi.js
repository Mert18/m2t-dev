import React from "react";
import Container from "../components/Container";
import GraphCon from "../components/GraphCon";
import Spotify from "../components/spotify";
import classes from "../styles/tmi.module.css";
const Tmi = () => {
  return (
    <Container>
      <div className={classes.tmi}>
        <div className={classes.graph}>
          <GraphCon />
        </div>
        <div className={classes.spotify}>
          <Spotify />
        </div>
      </div>
    </Container>
  );
};

export default Tmi;
