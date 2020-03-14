import React from 'react';
import classes from './ArtistsList.css';
import MusicSectionItem from '../MusicSection/MusicSectionItem/MusicSectionItem';

const ArtistList = (props) => {
    const artists = props.location.state.dataList || props.artists;
    return (
        <ul className={classes.ArtistsList}>
            {artists.map(artist => {
                return (
                    <MusicSectionItem
                        key={artist.id}
                        cover={artist.picture_medium}
                        title={artist.name}
                        artist={null}>    
                    </MusicSectionItem>
                )
            })}
        </ul>
    )
}

export default ArtistList;
