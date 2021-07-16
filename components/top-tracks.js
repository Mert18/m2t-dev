
import useSWR from 'swr';
import React from 'react';
import fetcher from '../../lib/fetcher';
import TopTrack from './TopTrack';

export default function TopTracks() {
    const { data } = useSWR('/api/top-tracks', fetcher);
    if (!data) {
      return null;
    }
  
    return data.tracks.map((track, index) => (
      <TopTrack ranking={index + 1} key={track.songUrl} {...track} />
    ));
  }