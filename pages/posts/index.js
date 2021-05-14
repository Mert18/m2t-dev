import { Fragment } from 'react';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';
import classes from './blog.module.css';


function AllPostsPage(props) {
    return (
        <Fragment>
            <div className={classes.blog__grid}>
                <div className={classes.hero}>
                    <h2>All of my writings.</h2>
                </div>
                <div className={classes.posts}>
                    <AllPosts posts={props.posts} />
                </div>
                <div className={classes.info}>

                </div>
            </div>
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