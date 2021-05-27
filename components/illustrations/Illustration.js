import React from 'react';
import classes from './illustration.module.css';

const Illustration = ({img, title, date}) => {
    return (
        <div className={classes.illustration}>
            <div className={classes.title}>
                <h2>{title}</h2>
                <p>{date}</p>
            </div>
            <div className={classes.img}>
                <img src={img} alt={title} />
            </div>
        </div>
    )
}

export default Illustration
