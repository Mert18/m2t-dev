import React from "react";
import Tracks from "./TopTracks";
import NowPlaying from "./NowPlaying";
import SectionHeader from "../SectionHeader";
import styled from "styled-components";

const SpotifyWrapper = styled.div`
  grid-area: spotify;
  padding: 1rem;
  background: var(--primary);
`;

const SpotifyInside = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "tracks nowplaying";

  @media(max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "tracks"
    "nowplaying";
  }
`;

const Spotify: React.FC = () => {
  return (
    <SpotifyWrapper>
      <SectionHeader title="Spotify" />
      <SpotifyInside>
        <Tracks />
        <NowPlaying />
      </SpotifyInside>
    </SpotifyWrapper>
  );
};

export default Spotify;
