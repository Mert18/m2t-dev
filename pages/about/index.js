
import classes from './about.module.css';
import Head from 'next/head';


const About = () => {
    return (
        <div className={classes.about}>
            <Head>
                <title>About a web developer</title>
                <meta name="description" content="Important things about a web developer." />
            </Head>
            <div className={classes.content}>
                <div className={classes.shadow}>

                </div>

                <div className={classes.hero}>
                    <div className={classes.hero__prof}>
                        <img src="/images/assets/prof.jpg" width="250px" />
                    </div>

                    <div className={classes.hero__text}>
                        <p>Computer Engineering Student</p>
                        <p>Frontend Developer</p>
                    </div>

                </div>
                
                <div className={classes.aboutstack}>
                    <h2>I know those and have used them in a project before.</h2>
                    <div className={classes.aboutstack__stack}>
                        <div className={classes.tech}>
                            <img src="/images/icons/sass.svg" width="60px" alt="sass icon" />
                        </div>
                        <div className={classes.tech}>
                            <img src="/images/icons/js.svg" width="60px" alt="js icon" />
                        </div>
                        <div className={classes.tech}>
                            <img src="/images/icons/react.svg" width="60px" alt="react icon" />
                        </div>
                        <div className={classes.tech}>
                            <img src="/images/icons/next-js.svg" width="60px" alt="nextjs icon" />
                        </div>
                        <div className={classes.tech}>
                            <img src="/images/icons/node-js.svg" width="60px" alt="nodejs icon" />
                        </div>
                        <div className={classes.tech}>
                            <img src="/images/icons/mongodb.svg" width="60px" alt="mongodb icon" />
                        </div>
                        <div className={classes.tech}>
                            <img src="/images/icons/git.svg" width="60px" alt="git icon" />
                        </div>
                    </div>

                    <h2>I'm still learning the following.</h2>

                    <div className={classes.aboutstack__stack}>
                        <div className={classes.tech}>
                            <img src="/images/icons/postgresql.svg" width="60px" alt="postgresql icon" />
                        </div>

                        <div className={classes.tech}>
                            <img src="/images/icons/linux-tux.svg" width="60px" alt="linux icon" />
                        </div>

                        <div className={classes.tech}>
                            <img src="/images/icons/typescript.svg" width="60px" alt="typescript icon" />
                        </div>

                        <div className={classes.tech}>
                            <img src="/images/icons/aws.svg" width="60px" alt="aws icon" />
                        </div>

                        
                    </div>

                    <h2>I'm planning to learn in the near future.</h2>

                    <div className={classes.aboutstack__stack}>
                        <div className={classes.tech}>
                            <img src="/images/icons/php.svg" width="60px" alt="postgresql icon" />
                        </div>

                        <div className={classes.tech}>
                            <img src="/images/icons/graphql.svg" width="60px" alt="mongodb icon" />
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
            </div>
            
            
        </div>
    )
}

export default About
