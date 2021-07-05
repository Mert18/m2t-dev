import React from 'react'
import classes from './comic.module.css';

const Comic = ({path, desc, date}) => {
    return (
        <figure className={classes.comic}>
            <img src={path} alt={desc} />
            <figcaption>{desc} - {date}</figcaption>
        </figure>
    )
}

export default Comic
