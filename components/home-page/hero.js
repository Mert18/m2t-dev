
import Image from 'next/image';
import classes from './hero.module.css';


function Hero() {
    return(
        <div className={classes.hero}>
            <div className={classes.hero__logo}>
                <Image src="/images/assets/logo.svg" width="200px" height="auto" />
            </div>
            <div className={classes.hero__text}>
                <h1>A Full-Stack Developer</h1>
                <h1>Computer Engineering Student</h1>
                <h1>Geek</h1>
            </div>
        </div>
    )
}

export default Hero;