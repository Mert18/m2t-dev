import React from "react";

interface ISpotify {
  song: string;
  artist: string;
  link: string;
}

const Spotify = ({ song, artist, link }: ISpotify) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center">
        <img src="/icons/spotify.svg" width="62px" />
      </div>
      <div className="flex flex-col items-start justify-center">
        <p>{song}</p>
        <p>{artist}</p>
      </div>
    </div>
  );
};

export default Spotify;
