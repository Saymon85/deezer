import React from 'react';
import MusicSectionItem from './MusicSectionItem/MusicSectionItem';
import classes from './MusicSection.css';



const MusicSection = (props) => {
   
    let editorialSelection = props.data.map( item => {
             return (<MusicSectionItem 
                            key={item.id}
                            cover={item.cover_medium || item.picture_medium}
                            tracklist={item.tracklist}
                            tracks={item.tracks ? item.tracks : null}
                            title={item.title}
                            artist={props.artist ? item.artist.name : null}
                            clicked={props.clicked}>
                     </MusicSectionItem>
             )
         });

    return (
        <div className={classes.MusicSection}>
            <div className={classes.SectionHeading}>
                <h2>{props.title}</h2>
                <div className={classes.CarouselButtons}>
                    <button className={`Prev ${classes.Disabled}`}>
                        <i className='fas fa-2x fa-angle-left'></i>
                    </button>
                    <button className='Next'>
                        <i className='fas fa-2x fa-angle-right'></i>
                    </button>
                </div> 
            </div>
            <div>
                <ul>
                    {editorialSelection}
                </ul>
            </div>
        </div>
    )
};

export default MusicSection;
