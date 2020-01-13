import React from 'react';
import classes from './MusicSectionItem.css';

const MusicSectionItem = (props) => {

    return (
        
        <li className={classes.MusicSectionItem}>
            <div>
                {props.cover ?  <img src={props.cover} alt={props.artist}></img>  : props.text }
            </div>
            <div>
                <h4>{props.title}</h4>
                <h5>{props.artist}</h5>
            </div>
        </li>
    )
}

export default MusicSectionItem;
