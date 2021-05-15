
import classes from './spotify.module.css';
import TopTracks from './top-tracks.js';
import Playlists from './Playlists.js';

function Spotify() {
    return(
        <div className={classes.spotify}>
            
            <div className={classes.spotify__toptracks}>

                <div className={classes.spotify__toptracks__title}>
                    <h2>My Spotify Top Five</h2>
                </div>
                <div className={classes.spotify__toptracks__toptracks}>
                    <TopTracks />
                </div>
                
            </div>

            <div className={classes.spotify__playlists}>
                <div className={classes.spotify__playlists__title}>
                    <h2>My Spotify Playlists</h2>
                </div>
                <div className={classes.spotify__playlists__playlists}>
                    <Playlists />
                </div>
            </div>
        </div>
    )
}

export default Spotify;