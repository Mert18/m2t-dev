
import Link from 'next/link';
import classes from './post-layout.module.css';

const PostItem = (props) => {
    const { slug, title, text, date } = props.post;
    const linkPath = `/posts/${slug}`;
    const formattedDate = new Date(date).toLocaleDateString('tr-TR');

    return (
        <li className={classes.postitem} key={slug}>
            <Link href={linkPath}>
                <a>
                    <h1>{title}</h1>
                </a>
            </Link>
                    <p>{text}</p>
                    <time>{formattedDate}</time>
                
        </li>
    )
}

export default PostItem