import React from 'react';
import classes from './projects.module.css';
import Link from 'next/link';

const Projects = () => {
    return (
        <div className={classes.projects}>
                <div className={classes.projects__title}>
                    <h2>Projects</h2>
                </div>

                <div className={classes.filters}>
                    <button>All</button>
                    <button>SPAs</button>
                    <button>Layout</button>
                    <button>Original</button>
                    <button>Classic</button>
                </div>

                <div className={classes.projects__projects}>

                    <Link href="https://from-the-heap.vercel.app/">
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
                                <div className={classes.project__tech__item}>
                                    <img src="/images/icons/mongodb.svg" width="105px" alt="mongodb icon" />
                                </div>
                            </div>

                        </div>

                        <div className={classes.project__img}>
                            <img src="/images/assets/fth.png" width="300px" alt="from the heap site" />
                        </div>
                    </div>
                    </Link>

                    <Link href="https://virtual-library-git-master-mert18.vercel.app/">
                        <div className={classes.project}>
                            <div className={classes.project__text}>
                                <div className={classes.project__title}>
                                    <h2>Virtual Library</h2>
                                </div>
                                <div className={classes.project__exp}>
                                    <h3>Social media alternative for book lovers.</h3>
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
                                    <div className={classes.project__tech__item}>
                                        <img src="/images/icons/postgresql.svg" width="35px" alt="postgresql icon" />
                                    </div>
                                </div>

                            </div>

                            <div className={classes.project__img}>
                                <img src="/images/assets/virtual.png" width="300px" alt="from the heap site" />
                            </div>
                        </div>
                    </Link>

                    <Link href="https://virtual-library-git-master-mert18.vercel.app/">
                        <div className={classes.project}>
                            <div className={classes.project__text}>
                                <div className={classes.project__title}>
                                    <h2>Today is Done.</h2>
                                </div>
                                <div className={classes.project__exp}>
                                    <h3>A Todo application.</h3>
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
                                    <div className={classes.project__tech__item}>
                                        <img src="/images/icons/postgresql.svg" width="35px" alt="postgresql icon" />
                                    </div>
                                </div>

                            </div>

                            <div className={classes.project__img}>
                                <img src="/images/assets/fth.png" width="300px" alt="from the heap site" />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
    )
}

export default Projects
