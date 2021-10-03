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
      <div className={classes.nowplayingcomp__spotifylogo}>
        <Image
          src="/icons/spotify-2.svg"
          width="50px"
          height="50px"
          alt="spotify"
        />
      </div>
      {data.isPlaying ? (
        <div className={classes.nowplayingcomp__text}>
          <a href={data.songUrl} target="_blank" rel="noreferrer">
            <p className={classes.songtitle}>{data.title}</p>
            <p className={classes.songartist}>{data.artist}</p>
          </a>
        </div>
      ) : (
        <div className={classes.notplaying}>Not Playing</div>
      )}
    </div>
  );
}
