import { Fragment } from 'react';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';
import Hero from '../../components/posts/hero';


function AllPostsPage(props) {
    return (
        <Fragment>
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