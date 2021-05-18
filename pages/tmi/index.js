import React, {Fragment} from 'react'

import GraphCon from '../../components/tmi/GraphCon';
import Spotify from '../../components/tmi/Spotify';
import Hero from '../../components/tmi/Hero';

function tmi(){
    return(
        <Fragment>
            <Hero />
            <GraphCon />
            <Spotify />
        </Fragment>
    )
}

export default tmi;