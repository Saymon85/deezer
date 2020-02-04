import React from 'react';
import TrackListBodyItems from './TrackListBodyItems/TrackListBodyItems';
import classes from './TrackListBody.css';


const TrackListBody = (props) => {
    return (
        <div className='TrackList'>
            <div className='TrackListHeading'></div>
            <div className='TrackListBody'>
                <TrackListBodyItems></TrackListBodyItems>
            </div>
        </div>
    )
}

export default TrackListBody;