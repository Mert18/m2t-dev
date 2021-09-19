import useSWR from "swr";
import fetcher from "../lib/fetcher";
import classes from "./styles/spotify.module.css";
import Image from "next/image";

export default function NowPlaying() {
  const { data } = useSWR("/api/now-playing", fetcher);
  if (!data) {
    return null;
  }
  return (
    <>
      <header className={classes.nowplaying__spotifylogo}>
        <Image
          src="/images/icons/spotify.svg"
          width="70px"
          height="70px"
          alt="spotify"
        />
      </header>
      <main className={classes.nowplaying__text}>
        <a href={data.songUrl} target="_blank" rel="noreferrer">
          {data.title}
        </a>
        <p>{data.artist}</p>
      </main>
    </>
  );
}
