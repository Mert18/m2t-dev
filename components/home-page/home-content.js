
import classes from './home-content.module.css';
import PostItem from '../posts/post-item.js';
import Game from '../Game.js';
import Link from 'next/link'



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
                    <h2>Highlighted <Link href="/projects">Projects</Link></h2>
                </div>
                <div className={classes.projects__projects}>
                    <div className={classes.project}>
                        
                        <div className={classes.project__text}>

                            <div className={classes.project__title}>
                                <h2>From The Heap</h2>
                            </div>

                            <div className={classes.project__exp}>
                                <h3>Share Songs and Movies, see who liked them!</h3>
                            </div>

                            <div className={classes.project__tech}>
                                <div className={classes.project__tech__item}>
                                    <img src="/images/icons/html5.svg" width="35px" alt="html icon" />
                                </div>
                                <div className={classes.project__tech__item}>
                                    <img src="/images/icons/sass-1.svg" width="35px" alt="sass icon" />
                                </div>
                                <div className={classes.project__tech__item}>
                                    <img src="/images/icons/react-2.svg" width="35px" alt="react icon" />
                                </div>
                                <div className={classes.project__tech__item}>
                                    <img src="/images/icons/nodejs-icon.svg" width="35px" alt="node icon" />
                                </div>
                            </div>

                        </div>

                        <div className={classes.project__img}>
                            <img src="/images/assets/fth.png" width="300px" alt="from the heap site" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HomeContent;