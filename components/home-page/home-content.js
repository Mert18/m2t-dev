
import classes from './home-content.module.css';
import PostItem from '../posts/post-item.js';

import Window from '../svgs/Window';



const HomeContent = (props) => {

    const { posts } = props;
    return (
        <section className={classes.home}>
            <div className={classes.home__blog}>
                <ul>
                    {posts.map((post) =>
                        <PostItem post={post} />
                    )}
                </ul>
            </div>

            <div className={classes.home__ill}>
                <Window />
            </div>
        </section>
    )
}

export default HomeContent;