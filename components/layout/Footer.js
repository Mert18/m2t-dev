import React from 'react';
import classes from './layout.module.css';

const Footer = () => {
    return (
        <div className={classes.footer}>

            <div className={classes.socials}>

                <div className={classes.socials__title}>
                    <h1>Socials</h1>
                </div>

                <div className={classes.socials__links}>
                    <div className={classes.socials__part}>
                        <div className="socials__part__icon">
                            <img src="/images/icons8-twitter.svg" width="50px"></img>
                        </div>
                        <div className="socials__part__title">
                            <h2>Twitter</h2>
                        </div>

                    </div>

                    <div className={classes.socials__part}>
                        <div className="socials__part__icon">
                            <img src="/images/icons8-github.svg" width="50px"></img>
                        </div>
                        <div className="socials__part__title">
                            <h2>Github</h2>
                        </div>

                    </div>

                    <div className={classes.socials__part}>
                        <div className="socials__part__icon">
                            <img src="/images/icons8-linkedin.svg" width="50px"></img>
                        </div>
                        <div className="socials__part__title">
                            <h2>Linkedin</h2>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Footer
