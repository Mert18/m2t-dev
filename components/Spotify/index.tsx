import React from "react";
import Tracks from "./TopTracks";
import NowPlaying from "./NowPlaying";
import SectionHeader from "../SectionHeader";
import styled from "styled-components";

const SpotifyWrapper = styled.div`
  padding: 1rem;
`;

const Spotify: React.FC = () => {
  return (
    <SpotifyWrapper>
      <SectionHeader title="Spotify" />
      <Tracks />
      <NowPlaying />
    </SpotifyWrapper>
  );
};

export default Spotify;
