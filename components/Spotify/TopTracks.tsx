import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import Track from "./Track";
import { TopTracks } from "../../lib/types";
import styled from "styled-components";

const TracksWrapper = styled.div`
  grid-area: tracks;
  padding: 1rem;
`;

const Tracks = () => {
  const { data } = useSWR<TopTracks>("/api/top-tracks", fetcher);
  if (!data) {
    return null;
  }

  return (
    <TracksWrapper>
      {data.tracks.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} {...track} />
      ))}
    </TracksWrapper>
  );
};

export default Tracks;
