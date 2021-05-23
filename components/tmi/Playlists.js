
import React from 'react';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';
import Playlist from './Playlist.js';

export default function Playlists() {
    const { data } = useSWR('/api/playlists', fetcher);
  
    if (!data) {
      return null;
    }
  
    return data.playlists.map((playlist, index) => (
      <Playlist key={playlist.playlistUrl} {...playlist} />
    ));
  }