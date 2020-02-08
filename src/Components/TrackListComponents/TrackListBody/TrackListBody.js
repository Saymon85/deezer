import React from 'react';
import TrackListBodyItem from './TrackListBodyItem/TrackListBodyItem';
import classes from './TrackListBody.css';


const TrackListBody = (props) => {
    return (
        <div className={classes.TrackList}>
            <div className={classes.TrackListHeading}>
                <span>#</span>
                <span>Track</span>
                <span>Artist</span>
                <span>Album</span>
                <span>Duration</span>
            </div>
            <div className='TrackListBody'>
                <TrackListBodyItem></TrackListBodyItem>
            </div>
        </div>
    )
}

export default TrackListBody;