import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import classes from "./spotify.module.css";
import styled from "styled-components";

import { NowPlayingSong } from "../../lib/types";

const NowPlayingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const RightNowPlaying = styled.div`
  flex: 1;
`;

const LinkToProfile = styled.div`
  flex: 1;
  color: var(--white);
`;

const SpotifyProfile = styled.a`
  &:before {
    content: "🦚 | ";
    font-size: 1.6rem;
  }
`;

const Link = styled.a``;

const Title = styled.h3`
  color: var(--white);
`;

const Artist = styled.p`
  color: var(--tertiary);
`;

const NotPlaying = styled.p`
  color: var(--white);
`;

const NowPlaying = () => {
  const { data } = useSWR<NowPlayingSong>("/api/now-playing", fetcher);
  if (!data) {
    return null;
  }
  return (
    <NowPlayingWrapper>
      <RightNowPlaying>
        {data.isPlaying ? (
          <Link href={data.songUrl} target="_blank" rel="noreferrer">
            <>
              <Title className={classes.songtitle}>{data.title}</Title>
              <Artist className={classes.songartist}>{data.artist}</Artist>
            </>
          </Link>
        ) : (
          <NotPlaying>
            Not playing right now. I might be dead. You better check me out. 🐧
          </NotPlaying>
        )}
      </RightNowPlaying>

      <LinkToProfile>
        <SpotifyProfile
          href="https://open.spotify.com/user/vnthw0w8gp2uil1unfvq4nz8n?si=772b0d8954e24236"
          target="_blank"
          rel="noreferrer"
        >
          Spotify Profile
        </SpotifyProfile>
      </LinkToProfile>
    </NowPlayingWrapper>
  );
};

export default NowPlaying;
