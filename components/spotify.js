import React from "react";
import classes from "./styles/spotify.module.css";
import TopTracks from "./top-tracks.js";
import NowPlaying from "./NowPlaying.js";

function Spotify() {
  return (
    <section className={classes.spotifycomp}>
      <h2>Top Tracks</h2>
      <div className={classes.spotifycomp__toptracks}>
        <TopTracks />
      </div>
      <div className={classes.spotifycomp__nowplaying}>
        <NowPlaying />
      </div>
    </section>
  );
}

export default Spotify;
