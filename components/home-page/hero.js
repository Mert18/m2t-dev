
import classes from './hero.module.css';

const Hero = () => {
    return (
        <div className={classes.hero}>
            <div className={classes.img}>
                <img src="/images/pp.svg" width="250px" />
            </div>
            <div className={classes.oth}>
                <h2>Hi, I'm Mert. I've dedicated myself to become a Full-Stack Developer. Learning Web Development since May, 2020.</h2>
                <div className={classes.hero__links}>
                    <a href="https://github.com/Mert18" target="_blank" rel="noreferrer">
                        <img src="/images/icons8-github.svg" alt="github icon" width="50px" />
                    </a>
                    <a href="https://www.linkedin.com/in/mert-u-8248ab135/" target="_blank" rel="noreferrer">
                        <img src="/images/icons8-linkedin.svg" alt="linkedin icon" width="50px" />
                    </a>
                </div>
            </div>


        </div>
    )
}

export default Hero;