
import Link from 'next/link';
import classes from './home-content.module.css';


const HomeContent = () => {
    return (
        <div className={classes.home}>
            <div className={classes.homehero}>
                <ul className={classes.nav}>
                    <Link href="/"><span>HOME</span></Link>
                    <Link href="/posts"><span>BLOG</span></Link>
                    <Link href="/about"><span>ABOUT</span></Link>
                    <Link href="/projects"><span>PROJECTS</span></Link>
                </ul>
            
                <div className={classes.links}>
                    <div className={classes.link}>
                        <a href="https://github.com/Mert18" target="_blank" rel="noreferrer">
                            <img src="/images/icons/icons8-github.svg" alt="github icon" width="50px" />
                        </a>
                    </div>
                    <div className={classes.link}>
                        <a href="https://www.linkedin.com/in/mert-u-8248ab135/" target="_blank" rel="noreferrer">
                            <img src="/images/icons/linkedin.svg" alt="linkedin icon" width="50px" />
                        </a>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default HomeContent;