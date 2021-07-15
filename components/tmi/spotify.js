
import React from 'react';
import classes from './spotify.module.css';
import TopTracks from './top-tracks.js';
import NowPlaying from './NowPlaying.js';
function Spotify() {
    return(
        <div className={classes.spotify}>
            <h2>Top Tracks</h2>
            <div className={classes.spotify__toptracks}>
                <TopTracks />
            </div>
            <div className={classes.spotify__nowplaying}>
                <NowPlaying />
            </div>
        </div>
    )
}

export default Spotify;