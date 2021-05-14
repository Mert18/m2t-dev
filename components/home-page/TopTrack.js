import React from 'react';
import classes from './spotify.module.css';

const TopTrack = ({title, artist, songUrl}) => {
    return (
            <div className={classes.toptrack}>
                <a href={`${songUrl}`} target="_blank" rel="noreferrer">
                    <div className={classes.toptrack__title}>
                        <h2>{title}</h2>
                    </div>
                </a>

                <div className={classes.toptrack__artist}>
                    <h2>{artist}</h2>
                </div>
            </div>
    )
}

export default TopTrack
