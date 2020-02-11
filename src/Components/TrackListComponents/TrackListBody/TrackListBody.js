import React from 'react';
import TrackListBodyItem from './TrackListBodyItem/TrackListBodyItem';
import classes from './TrackListBody.css';


const TrackListBody = (props) => {
    console.log(props.data);
    return (
        <div className={classes.TrackList}>
            <div className={classes.TrackListHeading}>
                <div className={classes.Hash}>#</div>
                <div className={classes.Fav}></div>
                <div className={classes.Track}>Track</div>
                <div className={classes.Artist}>Artist</div>
                <div className={classes.Album}>Album</div>
                <div className={classes.Duration}>Duration</div>
            </div>
            <div className={classes.TrackListBody}>
                {props.data.map((track, i) => { 
                    return (<TrackListBodyItem
                        key={track.id}
                        ordinalNumber={ i + 1 }
                        trackTitle={track.title}
                        artistName={track.artist.name}
                        albumName={track.album.title}
                        duration={track.duration}>
                        </TrackListBodyItem>)
                })}
            </div>
        </div>
    )
}

export default TrackListBody;