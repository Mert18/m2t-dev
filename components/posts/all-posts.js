
import PostsGrid from './posts-grid'

const AllPosts = (props) => {
    return (
        <section>
            <PostsGrid posts={props.posts} />
        </section>
    )
}

export default AllPosts