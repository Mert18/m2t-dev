import useSWR from "swr";
import fetcher from "../lib/fetcher";
import classes from "./styles/spotify.module.css";
import Image from "next/image";

import { NowPlayingSong } from "../lib/types";

export default function NowPlaying() {
  const { data } = useSWR<NowPlayingSong>("/api/now-playing", fetcher);
  if (!data) {
    return null;
  }
  return (
    <div className={classes.nowplayingcomp}>
      <a href={data.songUrl} target="_blank" rel="noreferrer">
        {data.isPlaying ? (
          <div className={classes.nowplayingcomp__text}>
            <p className={classes.songtitle}>{data.title}</p>
            <p className={classes.songartist}>{data.artist}</p>
          </div>
        ) : (
          <div className={classes.notplaying}>Not Playing</div>
        )}
      </a>
    </div>
  );
}
