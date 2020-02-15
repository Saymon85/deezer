import React from 'react';
import classes from './TrackListHeader.css';
import { backgroundGradients } from '../../../utilities/helpers';


const TrackListHeader = (props) => {
    let headerImage = <img src={props.img} alt='Playlist'></img>
    if(!props.img){
        const background = backgroundGradients[Math.round(Math.random() * 14)];
        headerImage = <div style={{backgroundImage: `var(${background})`}} 
                           className={classes.NoPicture}><span>Tracks</span></div>
    }
    return (
        <div className={classes.Header}>
            <div className={classes.Picture}>{headerImage}</div>
            <div className={classes.Info}>
                <div className={classes.Title}>{props.title}</div>
                <div className={classes.Creator}>
                    <img src={props.thumbnail} className={classes.Thumbnail} alt='creator'></img>
                    <span>{props.creator}</span>
                </div>
                <div className={classes.Description}>{props.description}</div>
                <div className={classes.AdditionalInfo}>
                    <span>{`${props.numbOfTracks} tracks`}</span>
                    <span>{props.duration}</span>
                    <span>{props.fans ? props.fans : 'No Fans'}</span>
                </div>
            </div>
        </div>
    )
}

export default TrackListHeader;