import React from 'react'
import classes from './about.module.css';



const About = () => {
    return (
        <section className={classes.about}>
            <div className={classes.aboutstack}>
                <h2>Bunları biliyorum ve daha önce bir projede kullandım.</h2>
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

                <h2>Bunlara aşinayım ve öğreniyorum.</h2>

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

                <h2>Yakın gelecekte de bunları öğrenmeyi planlıyorum.</h2>

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
                <h2>Kimim ben?</h2>
                <div className={classes.reallytext}>
                    <p>2000 yılında Hatay'da doğdum.</p><br />
                    <p>Çocukluğumdan beri bilgisayarlarla iç içeyim. Bu yüzden eğitimime buradan devam etmek istedim.</p><br />
                    <p>2018 Yılında Gazi Üniversitesi Bilgisayar Mühendisliği bölümüne girdim.</p><br />
                    <p>Mayıs 2020'de tesadüfen karşılaştığım bir yabancı sayesinde web geliştirmeyle tanıştım.</p><br />
                    <p>O zamandan beri bu alan üzerine çalışıyorum.</p><br />

                </div>
            </div>
        </section>
    )
}

export default About
