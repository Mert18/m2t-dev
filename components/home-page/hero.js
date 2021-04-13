
import classes from './hero.module.css';
import Hexagons from '../svgs/Hexagons.js';


const Hero = () => {
    return (
        <div className={classes.hero}>
            <Hexagons />
        </div>
    )
}

export default Hero;