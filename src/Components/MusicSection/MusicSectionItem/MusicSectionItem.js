import React from 'react';
import classes from './MusicSectionItem.css';

const MusicSectionItem = (props) => {

    return (
        
        <li className={classes.MusicSectionItem} onClick={() => props.clicked(props.tracklist)}>
            <div>
                {props.cover ?  <img src={props.cover} alt={props.artist}></img>  : props.text }
            </div>
            <div>
                <h5>{props.title}</h5>
                <h6>{props.artist}</h6>
            </div>
        </li>
    )
}

export default MusicSectionItem;
