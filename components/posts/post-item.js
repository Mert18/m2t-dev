
import Link from 'next/link';
import classes from './post-layout.module.css';
import Image from 'next/image';

const PostItem = (props) => {
    const { slug, title, text, date } = props.post;
    const linkPath = `/posts/${slug}`;
    const formattedDate = new Date(date).toLocaleDateString('tr-TR');

    return (
        <li className={classes.postitem} key={slug}>
            <Link href={linkPath}>
                <div className={classes.item}>
                    <div className={classes.photo}>
                        <img src="/images/assets/sce.svg" width="1024px" />
                    </div>

                    <div className={classes.text}>
                            <h1>{title}</h1>
                            <p>{text}</p>
                            <time>{formattedDate}</time>
                    </div>
                </div>
            </Link>

        </li>
    )
}

export default PostItem