import PostHeader from './post-header';
import ReactMarkdown from 'react-markdown';

const PostContent = (props) => {

    const { post } = props;
    const formattedDate = new Date(post.date).toLocaleDateString('tr-TR');
    return (
        <article>
            <PostHeader title={post.title} />
            <h2>{formattedDate}</h2>

            <ReactMarkdown>
                {post.content}
            </ReactMarkdown>
        </article>
    )
}

export default PostContent