import React, { useEffect, useState } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import axios from 'axios';

import classes from './about.module.css';

const url = "https://mert18-dev-en.vercel.app";

const About = () => {

    const [data, getData] = useState([]);

    const getAllData = () => {
        axios.get(`${url}/api/about`)
            .then((response) => {
                const allData = response.data;
                getData(allData);
            })
            .catch(error => console.error("can not fetch items."))
    }

    useEffect(() => {
        getAllData();
    }, [])


    return (
        <section className={classes.about}>
            <div className={classes.about__data}>
                <div className={classes.data__title}>
                    <h2>Nobody asked me whether I'm happy or not. So please don't rely on world happiness index. Mine is shown below.</h2>
                </div>
                <div className={classes.data__chart}>
                    <LineChart width={1000} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }} >
                        <Line type="monotone" strokeDasharray="7 7" dataKey="happiness" stroke="magenta" />
                        <Line type="monotone" dataKey="work" stroke="green" />
                        <Line type="monotone" dataKey="leisure" stroke="blue" />
                        <Line type="monotone" dataKey="game" stroke="red" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>
            </div>

            <div className={classes.aboutstack}>
                <h2>I know the following and I've used them in a project before.</h2>

                <div className={classes.aboutstack__stack}>
                    <div className={classes.tech}>
                        <img src="/images/icons/html5.svg" width="100px" alt="html icon" />
                    </div>
                    <div className={classes.tech}>
                        <img src="/images/icons/css3.svg" width="100px" alt="css icon" />
                    </div>
                    <div className={classes.tech}>
                        <img src="/images/icons/sass-1.svg" width="100px" alt="sass icon" />
                    </div>
                    <div className={classes.tech}>
                        <img src="/images/icons/logo-javascript.svg" width="100px" alt="js icon" />
                    </div>
                    <div className={classes.tech}>
                        <img src="/images/icons/react-2.svg" width="100px" alt="react icon" />
                    </div>
                    <div className={classes.tech}>
                        <img src="/images/icons/nodejs-icon.svg" width="100px" alt="nodejs icon" />
                    </div>
                    <div className={classes.tech}>
                        <img src="/images/icons/mongodb.svg" width="100px" alt="mongodb icon" />
                    </div>

                </div>

                <h2>I'm familiar and still learning the following technologies</h2>

                <div className={classes.aboutstack__stack}>
                    <div className={classes.tech}>
                        <img src="/images/icons/postgresql.svg" width="100px" alt="postgresql icon" />
                    </div>

                    <div className={classes.tech}>
                        <img src="/images/icons/linux-tux.svg" width="100px" alt="linux icon" />
                    </div>

                    
                </div>

                <h2>Technologies that I am planning to learn in the near future.</h2>

                <div className={classes.aboutstack__stack}>
                    <div className={classes.tech}>
                        <img src="/images/icons/php-1.svg" width="100px" alt="postgresql icon" />
                    </div>

                    <div className={classes.tech}>
                        <img src="/images/icons/typescript.svg" width="100px" alt="linux icon" />
                    </div>

                    <div className={classes.tech}>
                        <img src="/images/icons/graphql.svg" width="100px" alt="mongodb icon" />
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
