

import React, { Fragment } from 'react';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';
import Hero from '../../components/posts/hero';

import Head from 'next/head';

function AllPostsPage(props) {
    return (
        <Fragment>
            <Head>
                <title>All my blog posts</title>
                <meta name="description" content="writings about everything." />
            </Head>
            <Hero />
            <AllPosts posts={props.posts} />
        </Fragment>
    )

}

export function getStaticProps() {
    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts
        }
    };
}

export default AllPostsPage;