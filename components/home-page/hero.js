
import Image from 'next/image';
import classes from './hero.module.css';


function Hero() {
    return(
        <div className={classes.hero}>
            <div className={classes.hero__logo}>
                <h2>Mert Uygur</h2>
            </div>
            <div className={classes.hero__text}>
                <p>A Full-Stack Developer</p>
                <p>Computer Engineering Student</p>
                <p>Geek</p>
            </div>
        </div>
    )
}

export default Hero;