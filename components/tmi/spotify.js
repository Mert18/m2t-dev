
import React from 'react';
import classes from './spotify.module.css';
import TopTracks from './top-tracks.js';
import Playlists from './Playlists'

function Spotify() {
    return(
        <div className={classes.spotify}>
            <div className={classes.spotify__toptracks}>
                <div className={classes.spotify__toptracks__title}>
                    <h2>Top five songs in Spotify</h2>
                </div>
                <div className={classes.spotify__toptracks__toptracks}>
                    <TopTracks />
                </div>
                
            </div>

            <div className={classes.spotify__playlists}>
                <div className={classes.spotify__playlists__title}>
                    <h2>Best playlists you'll ever see</h2>
                </div>
                <div className={classes.spotify__playlists__playlists}>
                    <Playlists />
                </div>
            </div>
        </div>
    )
}

export default Spotify;