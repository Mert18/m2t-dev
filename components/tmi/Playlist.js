import React from 'react';
import classes from './spotify.module.css';
import Image from 'next/image';

const Playlist = (playlist) => {
    return (
        <div className={classes.toptrack}>
                <div className={classes.toptrack__text}>
                    <a href={playlist.playlistUrl} target="_blank" rel="noreferrer">
                        <div className={classes.topplaylist__title}>
                            <h2>{playlist.name}</h2>
                        </div>
                    </a>

                    <div className={classes.toptrack__artist}>
                        <h2>{playlist.trackCount.total} Songs</h2>
                    </div>
                </div>
               
            </div>
    )
}

export default Playlist
