import React from 'react';
import classes from './MusicSectionItem.css';

const MusicSectionItem = (props) => {
    console.log(props.playlistData);
    return (
        
        <li className={classes.MusicSectionItem} 
              onClick={() => props.clicked(props.tracks ? props.tracks.data : props.playlistData)}>
            <div>
                {props.cover ?  <img src={props.cover} alt={props.artist}></img>  : props.text }
            </div>
            <div>
                <h5>{props.title}</h5>
                <h6>{props.artist}</h6>
            </div>
        </li>
    )
};

export default MusicSectionItem;
