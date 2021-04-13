
import classes from './home-content.module.css';
import PostItem from '../posts/post-item.js';

import Link from 'next/link';

const HomeContent = (props) => {

    const { posts } = props;
    return (
        <section className={classes.home}>
            <Link href="/posts">
                <div className={classes.home__blog}>
                    {posts.map((post) =>
                        <PostItem post={post} />
                    )}
                </div>
            </Link>

            <div className={classes.home__ill}>
                <h3>&ldquo; Time to leave now, get out of this room, go somewhere, anywhere; sharpen this feeling of happiness and freedom, stretch your limbs, fill your eyes, be awake, wider awake, vividly awake in every sense and every pore. &rdquo;</h3>
            </div>

            <Link href="/about">
                <div className={classes.home__about}>
                    <div className={classes.home__about__content}>
                        <div>
                            <img src="/images/pp.svg" width="250px" />
                        </div>
                        <div>
                            <h2>Hi, I'm Mert. I've dedicated myself to become a Full-Stack Developer. Learning Web Development since May, 2020.</h2>
                        </div>
                    </div>
                </div>
            </Link>
            <div className={classes.home__projects}>

            </div>
        </section>
    )
}

export default HomeContent;