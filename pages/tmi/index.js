import React, {Fragment} from 'react'

import GraphCon from '../../components/tmi/GraphCon';
import Spotify from '../../components/tmi/spotify';
import Hero from '../../components/tmi/Hero';

import Head from 'next/head';

function tmi(){
    return(
        <Fragment>
            <Head>
                <title>Too Much Information</title>
                <meta name="description" content="Too much info about me." />
            </Head>
            <Hero />
            <GraphCon />
            <Spotify />
        </Fragment>
    )
}

export default tmi;