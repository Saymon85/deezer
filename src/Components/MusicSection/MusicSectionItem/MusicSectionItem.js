import React from 'react';
import classes from './MusicSectionItem.css';

const MusicSectionItem = (props) => {

    return (
        <li className={classes.MusicSectionItem} 
              onClick={() => props.clicked(props.playlistData ? props.playlistData : props.tracklist, props.id)}>
            <div>
                {props.cover ?  <img src={props.cover} alt={props.artist}></img>  : props.text }
            </div>
            <div>
                <h5><span>{props.title}</span></h5>
                <h6>{props.artist}</h6>
            </div>
        </li>
    )
};

export default MusicSectionItem;
