
import PostItem from './post-item';
import classes from './post-layout.module.css';

const PostsGrid = (props) => {
    const { posts } = props;
    return (
            <ul className={classes.postsgrid}>
                {posts.map((post) =>
                    <PostItem key={post.slug} post={post} />
                )}
            </ul>
    )
}
export default PostsGrid