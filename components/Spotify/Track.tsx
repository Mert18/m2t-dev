import React from "react";
import styled from "styled-components";

const TopTrack = styled.article`
  background: var(--flavor);
  padding: .6rem;
  margin: .4rem;
`;

const Link = styled.a``;

const TrackTitle = styled.h3`
  color: var(--white);
`;

const TrackArtist = styled.p`
  color: var(--tertiary);
`;

const Track = (track: any) => {
  return (
    <TopTrack>
      <Link href={track.songUrl} target="_blank" rel="noreferrer">
        <TrackTitle>{track.title}</TrackTitle>
        <TrackArtist>{track.artist}</TrackArtist>
      </Link>
    </TopTrack>
  );
};

export default Track;
