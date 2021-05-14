
import classes from './spotify.module.css';
import axios from 'axios';

import {useEffect, useState} from 'react';
import TopTrack from './TopTrack';

const url = process.env.TOP_TRACKS;

function Spotify() {
    const [topTracks, setTopTracks] = useState([]);

    const getTopTracks = async() => {
        const response = await axios.get(url);
        try {
            setTopTracks(response.data.tracks.slice(1, 6));
        } catch (error) {
            console.error(error.message)
        }
    }


    useEffect(() => {
        getTopTracks();
    },[])


    return(
        <div className={classes.spotify}>
            
            <div className={classes.spotify__toptracks}>

                <div className={classes.spotify__toptracks__title}>
                    <h2>My Spotify Top Five</h2>
                </div>
                <div className={classes.spotify__toptracks__toptracks}>
                    {topTracks.map((song) => (
                        <TopTrack key={song.title} title={song.title} artist={song.artist} songUrl={song.songUrl} />       
                    ))}
                </div>
                
            </div>
        </div>
    )
}

export default Spotify;