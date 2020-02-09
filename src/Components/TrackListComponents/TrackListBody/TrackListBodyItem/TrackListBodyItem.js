import React from 'react';
import classes from './TrackListBodyItem.css';

const TrackListBodyItem = (props) => {
    return (<div className={ classes.TrackListBodyItem }>
                <div className={ classes.OrdinalNumber }> { props.ordinalNumber } </div>
                <div className={ classes.PlayBtn }><i className="fas fa-play-circle"></i></div>
                <div className={ classes.Heart }><i className="far fa-heart"></i></div>
                <div className={ classes.TrackTitle }>{ props.trackTitle }</div>
                <div className={ classes.ArtistName }>{ props.artistName }</div>
                <div className={ classes.AlbumName }>{ props.albumName }</div>
                <div className={ classes.Duration }>{ props.duration }</div>
            </div>)
}

export default TrackListBodyItem;