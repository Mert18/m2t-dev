
import React from 'react';
import classes from './styles/spotify.module.css';

const TopTrack = (track) => {
    return (
        <article className={classes.toptrack}>
            <a href={track.songUrl} target="_blank" rel="noreferrer">
                <div className={classes.toptrack__title}>
                    <h2>{track.title}</h2>
                </div>
            </a>
            <div className={classes.toptrack__artist}>
                <h2>{track.artist}</h2>
            </div>
            
        </article>
    )
}

export default TopTrack
