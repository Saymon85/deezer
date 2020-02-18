import React from 'react';
import classes from './AlbumTrackListItem.css';
import { convertSecondsToMinutes } from '../../../utilities/utilities';

const AlbumTrackListItem = (props) => {
    return (
            <div className={ classes.AlbumTrackListItem }>
                <div className={ classes.OrdinalNumber }> { props.ordinalNumber } </div>
                <div className={ classes.PlayButton }><i className="fas fa-play-circle"></i></div>
                <div className={ classes.PauseButton }><i className="fas fa-pause-circle"></i></div>
                <div className={ classes.Heart }><i className="far fa-heart"></i></div>
                <div className={ classes.TrackTitle }>{ props.trackTitle }</div>
                <div className={ classes.Duration }>{ convertSecondsToMinutes(props.duration) }</div>
            </div>
    )
}

export default AlbumTrackListItem;
