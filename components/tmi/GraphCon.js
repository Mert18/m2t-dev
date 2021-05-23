
import React from 'react';
import classes from './graphcon.module.css';
import dynamic from 'next/dynamic'

function Hero() {

    const MyChart = dynamic(
        () => import('./Graph.js'),
        { ssr: false }
      )
    return(
        <div className={classes.graphcon}>
            <div className={classes.graphcon__graph}>
                <MyChart />
            </div>
        </div>
    )
}

export default Hero;