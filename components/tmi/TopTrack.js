import React from 'react';
import classes from './spotify.module.css';
import Image from 'next/image';

const TopTrack = (track) => {
    return (
            <div className={classes.toptrack}>
                <div className={classes.toptrack__text}>
                    <a href={track.songUrl} target="_blank" rel="noreferrer">
                        <div className={classes.toptrack__title}>
                            <h2>{track.title}</h2>
                        </div>
                    </a>

                    <div className={classes.toptrack__artist}>
                        <h2>{track.artist}</h2>
                    </div>
                </div>
               
            </div>
    )
}

export default TopTrack
