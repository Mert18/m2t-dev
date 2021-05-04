import React from 'react'
import classes from './featured-posts.module.css';
import PostsGrid from '../posts/posts-grid.js';

function featuredPosts(props) {
    return <section className={classes.latest}>
        <h2>Featured Posts</h2>
        <PostsGrid posts={props.posts} />
    </section>
}

export default featuredPosts
