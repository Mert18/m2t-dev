import React from 'react';
import classes from './styles/comic.module.css';
import Image from 'next/image';

const Comic = ({path, desc, date}) => {
    return (
        <figure className={classes.comic}>
            <Image src={path} alt={desc} width={1200} height={1200} />
            <figcaption>{desc} - {date}</figcaption>
        </figure>
    )
}

export default Comic
