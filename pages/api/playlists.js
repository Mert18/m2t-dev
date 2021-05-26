
import { getPlaylists } from '../../lib/spotify.js';

export default async (_, res) => {
  const response = await getPlaylists();
  const { items } = await response.json();
  console.log(items);
  const playlists = items.slice(0, 5).map((playlist) => ({
    name: playlist.name,
    playlistUrl: playlist.external_urls.spotify,
    trackCount: playlist.tracks,
  }));

  return res.status(200).json({ playlists });
};