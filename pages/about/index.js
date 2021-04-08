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
                console.log(allData)
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
                        <Line type="monotone" strokeDasharray="5 5" dataKey="happiness" stroke="black" />
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
        </section>
    )
}

export default About
