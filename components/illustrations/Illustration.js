import React from 'react';
import classes from './illustration.module.css';

const Illustration = ({img, title, date}) => {
    return (
            <figure className={classes.figure}>
                <img src={img} alt={title} />
                <figcaption>{title} , {date}</figcaption>
            </figure>
    )
}

export default Illustration
