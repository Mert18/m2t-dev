import React, {Fragment} from 'react'

import GraphCon from '../../components/tmi/GraphCon';
import Spotify from '../../components/tmi/spotify';
import Hero from '../../components/tmi/Hero';

import Head from 'next/head';
import classes from './tmi.module.css'

function tmi(){
    return(
        <div className={classes.tmi}>
            <Head>
                <title>Too Much Information</title>
                <meta name="description" content="Too much info about me." />
            </Head>
            <div className={classes.content}>
                <div className={classes.shadow}>

                </div>
                <Hero />
                <GraphCon />
                <Spotify />
            </div>
            
        </div>
    )
}

export default tmi;