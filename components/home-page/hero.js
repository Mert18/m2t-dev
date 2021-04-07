
import classes from './hero.module.css';

const Hero = () => {
    return (
        <div className={classes.hero}>
            <div className={classes.hero__title}>
                <h1>Mert Uygur</h1>
            </div>
            <div className={classes.hero__links}>
                <a href="https://github.com/Mert18" target="_blank" rel="noreferrer">
                    <img src="/images/icons8-github.svg" alt="github icon" width="50px" />
                </a>
                <a href="https://www.linkedin.com/in/mert-u-8248ab135/" target="_blank" rel="noreferrer">
                    <img src="/images/icons8-linkedin.svg" alt="linkedin icon" width="50px" />
                </a>
                <a href="https://twitter.com/mert18dev" target="_blank" rel="noreferrer">
                    <img src="/images/icons8-twitter.svg" alt="twitter icon" width="50px" />
                </a>
            </div>

        </div>
    )
}

export default Hero;