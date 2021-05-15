
import useSWR from 'swr';

import fetcher from '../../lib/fetcher';
import TopTrack from './TopTrack.js';

export default function TopTracks() {
    const { data } = useSWR('/api/top-tracks', fetcher);
    if (!data) {
      return null;
    }
  
    return data.tracks.map((track, index) => (
      <TopTrack ranking={index + 1} key={track.songUrl} {...track} />
    ));
  }