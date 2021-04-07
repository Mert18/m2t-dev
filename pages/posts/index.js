import { Fragment } from 'react';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';


function AllPostsPage(props) {
    return (
        <Fragment>
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