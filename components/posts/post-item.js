
import Link from 'next/link';
import classes from './post-layout.module.css';

const PostItem = (props) => {
    const { slug, title, text, date } = props.post;
    const linkPath = `/posts/${slug}`;
    const formattedDate = new Date(date).toLocaleDateString('tr-TR');

    return (
        <li className={classes.postitem}>
            <Link href={linkPath}>
                <a>
                    <h1>{title}</h1>
                    <p>{text}</p>
                    <time>{formattedDate}</time>
                </a>
            </Link>
        </li>
    )
}

export default PostItem