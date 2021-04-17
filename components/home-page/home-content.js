
import classes from './home-content.module.css';
import PostItem from '../posts/post-item.js';
import Game from '../Game.js';




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
            <div className={classes.game}>
                <Game />
            </div>
            <div className={classes.projects}>
                <div className={classes.projects__title}>
                    <h2>Projects</h2>
                </div>
                <div className={classes.projects__projects}>
                    <div className={classes.project}>
                        <div className={classes.project__img}>
                            <img src="/images/assets/fth.png" width="300px" alt="from the heap site" />
                        </div>
                        <div className={classes.project__title}>
                            <h2>From The Heap</h2>
                        </div>
                        <div className={classes.project__text}>
                            <h3>Share Songs and Movies, see who liked them!</h3>
                        </div>

                    </div>
                    <div className={classes.project}>
                        <div className={classes.project__img}>
                            <img src="/images/assets/fth.png" width="300px" alt="from the heap site" />
                        </div>
                        <div className={classes.project__title}>
                            <h2>From The Heap</h2>
                        </div>
                        <div className={classes.project__text}>
                            <h3>Share Songs and Movies, see who liked them!</h3>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HomeContent;