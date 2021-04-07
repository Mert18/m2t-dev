import PostHeader from './post-header';
import ReactMarkdown from 'react-markdown';

import classes from './single-post.module.css';
const PostContent = (props) => {

    const { post } = props;
    const formattedDate = new Date(post.date).toLocaleDateString('tr-TR');
    return (
        <article className={classes.singlepost}>
            <div className={classes.header}>
                <PostHeader title={post.title} />
                <h2>{formattedDate}</h2>
            </div>
            <div className={classes.content}>
                <ReactMarkdown>
                    {post.content}
                </ReactMarkdown>
            </div>
        </article>
    )
}

export default PostContent