import React from 'react';
import classes from './TrackListBodyItem.css';
import { convertSecondsToMinutes } from '../../../../utilities/utilities';

const TrackListBodyItem = (props) => {
    return (<div className={ classes.TrackListBodyItem }>
                <div className={ classes.OrdinalNumber }> { props.ordinalNumber } </div>
                <div className={ classes.PlayButton }><i className="fas fa-play-circle"></i></div>
                <div className={ classes.PauseButton }><i className="fas fa-pause-circle"></i></div>
                <div className={ classes.Heart }><i className="far fa-heart"></i></div>
                <div className={ classes.TrackTitle }>{ props.trackTitle }</div>
                <div className={ classes.ArtistName }>{ props.artistName }</div>
                <div className={ classes.AlbumName }>{ props.albumName }</div>
                <div className={ classes.Duration }>{ convertSecondsToMinutes(props.duration) }</div>
            </div>)
}

export default TrackListBodyItem;