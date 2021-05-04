import React from 'react'
import classes from './about.module.css';

import Graph from '../../components/Graph.js';

const About = () => {
    return (
        <section className={classes.about}>
            <div className={classes.about__graph}>
                <Graph />
            </div>
            <div className={classes.aboutstack}>
                <h2>I know the following and I've used them in a project before.</h2>
                <div className={classes.aboutstack__stack}>
                    <div className={classes.tech}>
                        <img src="/images/icons/html5.svg" width="75px" alt="html icon" />
                    </div>
                    <div className={classes.tech}>
                        <img src="/images/icons/css3.svg" width="75px" alt="css icon" />
                    </div>
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

                <h2>I'm familiar and still learning the following technologies</h2>

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

                <h2>Technologies that I am planning to learn in the near future.</h2>

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
                <h2>But really, who am I?</h2>
                <div className={classes.reallytext}>
                    <p>I was born in southernmost city of Turkey, Hatay.</p><br />
                    <p>My curiosity about computers and games pushed me to study a familiar field, Computer Engineering.</p><br />
                    <p>For that reason I moved to Ankara, Capital of Turkey, to study Computer Engineering.</p><br />
                    <p>In May 2020, a stranger walked into my Discord room and started talking about his website homework.</p><br />
                    <p>This is where I met Web Development.</p><br />

                </div>
            </div>
        </section>
    )
}

export default About
