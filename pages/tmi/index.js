import React, {Fragment} from 'react'

import GraphCon from '../../components/tmi/GraphCon';
import Spotify from '../../components/tmi/spotify';
import Hero from '../../components/tmi/Hero';

import Head from 'next/head';
import classes from './tmi.module.css'

function tmi(){
    return(
        <section className={classes.tmi}>
            <Head>
                <title>Too Much Information</title>
                <meta name="description" content="Too much info about me." />
            </Head>
            <main className={classes.content}>
                <Hero />
                <GraphCon />
                <Spotify />
            </main>
            
        </section>
    )
}

export default tmi;