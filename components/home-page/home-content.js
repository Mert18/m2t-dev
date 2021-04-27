
import Link from 'next/link';
import classes from './home-content.module.css';

import HomeLayout from '../layout/home';

const HomeContent = () => {
    return (
        <HomeLayout>
                <div className={classes.home}>
                        <ul className={classes.nav}>
                            <Link href="/"><span>HOME</span></Link>
                            <Link href="/posts"><span>BLOG</span></Link>
                            <Link href="/about"><span>ABOUT</span></Link>
                            <Link href="/projects"><span>PROJECTS</span></Link>
                        </ul>
                    
                        <div className={classes.links}>
                            <a href="https://github.com/Mert18" target="_blank" rel="noreferrer">
                                <img src="/images/icons/icons8-github.svg" alt="github icon" width="70px" />
                            </a>
                            <a href="https://www.linkedin.com/in/mert-u-8248ab135/" target="_blank" rel="noreferrer">
                                <img src="/images/icons/icons8-linkedin.svg" alt="linkedin icon" width="70px" />
                            </a>
                        </div>
                </div>
        </HomeLayout>
    )
}

HomeContent.Layout = HomeLayout;

export default HomeContent;