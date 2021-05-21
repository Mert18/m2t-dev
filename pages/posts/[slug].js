import PostContent from "../../components/posts/single-post/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import React, {Fragment} from 'react';
import Head from 'next/head';

function SinglePostPage(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.post.title}</title>
                <meta name="description" content={props.post.text} />
            </Head>
            <PostContent post={props.post} />
        </Fragment>
    )

}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const postData = getPostData(slug);

    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}

export function getStaticPaths() {

    const postFileNames = getPostsFiles();

    const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/, ''));

    return {
        paths: slugs.map(slug => ({ params: { slug: slug } })),
        fallback: false
    }
}


export default SinglePostPage;