import React from "react";
import classes from "./styles/spotify.module.css";
import Image from "next/image";

const Track = (track: any) => {
  return (
    <article className={classes.toptrack}>
      <div className={classes.nowplayingcomp__spotifylogo}>
        <Image
          src="/icons/spotify-2.svg"
          width="50px"
          height="50px"
          alt="spotify"
        />
      </div>

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
