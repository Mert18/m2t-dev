
import React from 'react';
import classes from './about.module.css';
import Image from 'next/image';


const About = () => {
    return (
        <section className={classes.about}>
            <div className={classes.hakk}>
                <div className={classes.hakk__prof}>
                    <img src="/images/assets/prof.jpg" width="250px" />
                </div>

                <div className={classes.hakk__text}>
                    <p>Computer Engineering Student</p>
                    <p>Full-Stack Engineer</p>
                    <div className={classes.hakk__text__icons}>
                        <a href="https://github.com/Mert18" rel="noreferrer" target="_blank">
                        <Image src="/images/icons/github.svg" width="40px" height="40px" /> 
                        </a>

                        <a href="https://www.linkedin.com/in/mert-u-8248ab135/" rel="noreferrer" target="_blank">
                        <Image src="/images/icons/linkedin.svg" width="40px" height="40px" />
                        </a>
                    </div>
                </div>
            </div>
            <div className={classes.aboutstack}>
                <h2>I know those and have used them in a project before.</h2>
                <div className={classes.aboutstack__stack}>
                    <div className={classes.tech}>
                        <img src="/images/icons/sass-1.svg" width="75px" alt="sass icon" />
                    </div>
                    <div className={classes.tech}>
                        <img src="/images/icons/logo-javascript.svg" width="75px" alt="js icon" />
                    </div>
                    <div className={classes.tech}>
                        <img src="/images/icons/react-2.svg" width="75px" alt="react icon" />
                    </div>
                    <div className={classes.tech}>
                        <img src="/images/icons/nodejs-icon.svg" width="75px" alt="nodejs icon" />
                    </div>
                    <div className={classes.tech}>
                        <img src="/images/icons/mongodb.svg" width="75px" alt="mongodb icon" />
                    </div>
                    <div className={classes.tech}>
                        <img src="/images/icons/git-icon.svg" width="75px" alt="git icon" />
                    </div>

                </div>

                <h2>I'm still learning the following.</h2>

                <div className={classes.aboutstack__stack}>
                    <div className={classes.tech}>
                        <img src="/images/icons/postgresql.svg" width="75px" alt="postgresql icon" />
                    </div>

                    <div className={classes.tech}>
                        <img src="/images/icons/linux-tux.svg" width="75px" alt="linux icon" />
                    </div>

                    <div className={classes.tech}>
                        <img src="/images/icons/next-js.svg" width="75px" alt="nextjs icon" />
                    </div>

                    <div className={classes.tech}>
                        <img src="/images/icons/typescript.svg" width="75px" alt="linux icon" />
                    </div>

                    
                </div>

                <h2>I'm planning to learn in the near future.</h2>

                <div className={classes.aboutstack__stack}>
                    <div className={classes.tech}>
                        <img src="/images/icons/php-1.svg" width="75px" alt="postgresql icon" />
                    </div>

                    

                    <div className={classes.tech}>
                        <img src="/images/icons/graphql.svg" width="75px" alt="mongodb icon" />
                    </div>
                </div>
            </div>

            <div className={classes.really}>
                <h2>Who am I?</h2>
                <div className={classes.reallytext}>
                    <p>I was born in the southernmost city in Turkey, Hatay.</p><br />
                    <p>In 2018, I started studying Computer Engineering in Gazi University. </p><br />
                    <p>In May 2020, I had a chance to dive into web technologies, so I did.</p><br />
                    <p>From this point, I've been learning and making projects in web development area.</p><br />
                </div>
            </div>
        </section>
    )
}

export default About
