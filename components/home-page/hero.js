
import Image from 'next/image';
import classes from './hero.module.css';
import Link from 'next/link';


function Hero() {
    return(
        <div className={classes.hero}>
            <div className={classes.hero__text}>
                <div className={classes.hero__text__name}>
                    <h1>Mert Uygur</h1>
                </div>
                <div className={classes.hero__text__nav}>
                    <Link href="/posts"><a>BLOG</a></Link>
                </div>
                <div className={classes.hero__text__nav}>
                    <Link href="/about"><a>ABOUT</a></Link>
                </div>
                <div className={classes.hero__text__nav}>
                    <Link href="/projects"><a>PROJECTS</a></Link>
                </div>
            </div>
            <div className={classes.hero__img}>
                <Image src="/images/assets/sce.svg" width="1024px" height="512px" />
            </div>
        </div>
    )
}

export default Hero;