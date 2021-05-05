
import React, {useEffect, useState} from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import classes from '../pages/about/about.module.css';

const url = process.env.URL;

const Graph = () => {

    const [data, getData] = useState([]);

    const getAllData = () => {
        axios.get(`${url}`)
            .then((response) => {
                const allData = response.data;
                getData(allData);
            })
            .catch(error => console.error("can not fetch items."))
    }

    useEffect(() => {
        
        getAllData();
    }, [])


    return(
        <div className={classes.chart}>
                <LineChart width={1000} height={400} data={data} >
                    <Line type="monotone" dataKey="game" stroke="magenta" strokeDasharray="7 7" dot={false} />
                    <Line type="monotone" strokeDasharray="7 7" dataKey="work" stroke="green" dot={false} />
                    <Line type="monotone" dataKey="leisure" strokeDasharray="7 7" stroke="#A6808C" dot={false} />
                    <Line type="monotone"  dataKey="happiness" stroke="#EF5B5B" strokeWidth={3} dot={false} />
                    <CartesianGrid stroke="#12263A" />
                    <XAxis dataKey="date" stroke="white" hide={true}   />
                    <YAxis />
                    <Legend />
                    <Tooltip  />
                </LineChart>
            </div>
    )
}

export default Graph