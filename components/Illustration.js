import React from 'react';
import classes from './styles/illustration.module.css';
import Image from 'next/image';

const Illustration = ({img, title, date}) => {
    return (
            <figure className={classes.figure}>
                <Image src={img} alt={title} width={1024} height={1024} />
                <figcaption>{title} , {date}</figcaption>
            </figure>
    )
}

export default Illustration
