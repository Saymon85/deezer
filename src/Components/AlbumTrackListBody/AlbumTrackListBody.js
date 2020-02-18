import React from 'react';
import classes from './AlbumTrackListBody.css';
import AlbumTrackListItem from './AlbumTrackListItem/AlbumTrackListItem';


const AlbumTrackListBody = (props) => {
    return (
        <div className={classes.AlbumTrackList}>
            <div className={classes.AlbumTracksHeading}>
                <div className={classes.Hash}>#</div>
                <div className={classes.Fav}></div>
                <div className={classes.Track}>Track</div>
                <div className={classes.Duration}>Duration</div>
            </div>
            <div className={classes.AlbumTracksBody}>
                 {props.data.map((track, i) => {
                     return (
                        <AlbumTrackListItem
                                    key={track.id}
                                    ordinalNumber={i + 1 }
                                    trackTitle={track.title_short}
                                    duration={track.duration}>
                        </AlbumTrackListItem>
                     );
                 })}
            </div>
        </div>
    )
}

export default AlbumTrackListBody;