
import React from 'react';
import classes from './single-post.module.css';

const PostHeader = (props) => {
    const { title } = props;
    return (
        <header className={classes.headertitle}>
            <h1>{title}</h1>
        </header>
    )
}

export default PostHeader;