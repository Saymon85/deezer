import React from 'react';
import MusicSectionItem from './MusicSectionItem/MusicSectionItem';
import classes from './MusicSection.css';
import { backgroundGradients } from '../../utilities/helper';


const MusicSection = (props) => {
    console.log(props.data);
   
    let editorialSelection = null;
    if(props.charts){
        editorialSelection = []; 
        for( let item in props.data) {
            editorialSelection.push((
                <MusciSelectionItem 
                            key={props.data[item].}
            ))
        }
    }

    editorialSelection = props.data.map( item => {
            return (<MusicSectionItem 
                            key={item.id}
                            cover={item.cover_medium}
                            tracklist={item.tracklist}
                            title={item.title}
                            artist={item.artist.name}></MusicSectionItem>
             )
        });


    return (
        <div className={classes.MusicSection}>
            <div className={classes.SectionHeading}>
                <h2>{props.title}</h2>
                <div className={classes.CarouselButtons}>
                    <button className = 'Prev'><i className="fas fa-2x fa-angle-left"></i></button>
                    <button className = 'Next'><i className="fas fa-2x fa-angle-right"></i> </button>
                </div> 
            </div>
            <div>
                <ul>
                    {editorialSelection}
                </ul>
            </div>
        </div>
    )
}

export default MusicSection;
