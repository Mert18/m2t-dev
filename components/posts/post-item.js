
import React from 'react';
import Link from 'next/link';
import classes from './post-layout.module.css';

const PostItem = (props) => {
    const { slug, title, text, hero_image, date } = props.post;
    const linkPath = `/posts/${slug}`;
    const formattedDate = new Date(date).toLocaleDateString('tr-TR');

    return (
        <li className={classes.postitem} key={slug}>
            <Link href={linkPath}>
                <div className={classes.item}>
                    <div className={classes.photo}>
                        <img src={hero_image} width="170px" />
                    </div>

                    <div className={classes.text}>
                        <h1>{title}</h1>
                        <p>{text}</p>
                        <time className={classes.text__time}>{formattedDate}</time>
                    </div>
                </div>
            </Link>

        </li>
    )
}

export default PostItem