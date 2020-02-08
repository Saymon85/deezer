import React from 'react';
import Button from '../../UI/Button/Button';
import classes from './TrackListControl.css';

const TrackListControls = (props) => {
    return (
        <div className='Controls'>
            <Button type='Play' icon='far fa-play-circle'>Listen</Button>
            <Button type='Add 'icon='far fa-heart'>Add</Button>
            <Button type='Share' icon='fas fa-share-square'>Share</Button>
        </div>
    )
}

export default TrackListControls; 