import React from "react";
import classes from "./styles/spotify.module.css";
import Image from "next/image";

const Track = (track: any) => {
  return (
    <article className={classes.toptrack}>
      <a href={track.songUrl} target="_blank" rel="noreferrer">
        <div className={classes.toptrack__title}>
          <p>{track.title}</p>
        </div>
        <div className={classes.toptrack__artist}>
          <p>{track.artist}</p>
        </div>
      </a>
    </article>
  );
};

export default Track;
