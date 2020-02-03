import React from 'react';
import classes from './TrackListHeader.css';

const TrackListHeader = (props) => {
    return (
        <div className='Header'>
            <div className='Picture'></div>
            <div className='Info'>
                <div className='Title'></div>
                <div className='Creator'></div>
                <div className='Description'></div>
                <div className='AdditionalInfo'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default TrackListHeader;