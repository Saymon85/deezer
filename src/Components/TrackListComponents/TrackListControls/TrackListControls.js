import React from 'react';
import Button from '../../UI/Button/Button';
import classes from './TrackListControl.css';

const TrackListControls = (props) => {
    return (
        <div className='Controls'>
            <Button icon='far fa-play-circle'>Listen</Button>
            <Button icon='far fa-heart'>Add</Button>
            <Button icon='fas fa-share-square'>Share</Button>
        </div>
    )
}