
import Image from 'next/image';
import classes from './hero.module.css';


function Hero() {
    return(
        <div className={classes.hero}>
            <div className={classes.hero__img}>
                <Image src="/images/assets/sce.svg" width="1024px" height="512px" />
            </div>
        </div>
    )
}

export default Hero;