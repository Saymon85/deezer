import React from 'react';
import classes from './TrackListHeader.css';

const TrackListHeader = (props) => {
    let headerImage = <img src={props.picture} alt='Playlist'></img>
    if(!props.img){
        headerImage = <div className=''></div>
    }
    return (
        <div className='Header'>
            <div className='Picture'>{headerImage}</div>
            <div className='Info'>
            <div className='Title'>{props.title}</div>
                <div className='Creator'>
                    <img className='Thumbnail' alt='creator'></img>
                    <span>{props.creator}</span>
                </div>
                <div className='Description'>{props.description}</div>
                <div className='AdditionalInfo'>
                    <span>{props.numbOfTracks}</span>
                    <span>{props.duration}</span>
                    <span>{props.fans ? props.fans : 'No Fans'}</span>
                </div>
            </div>
        </div>
    )
}

export default TrackListHeader;