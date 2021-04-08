import React, { useEffect, useState } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import axios from 'axios';
const url = "http://localhost:3000";

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
        <section>
            <div className="about__data">
                <div className="about__data__title">
                    <h2>Please don't rely on world happiness index. Mine is shown below.</h2>
                </div>
                <div className="about__data__chart">
                    <LineChart width={1200} height={500} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }} >
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
