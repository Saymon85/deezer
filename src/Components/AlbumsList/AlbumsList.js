import React from 'react';
import classes from './AlbumsList.css';
import MusicSectionItem from '../MusicSection/MusicSectionItem/MusicSectionItem'; 

const AlbumsList = (props) => {
    const albums = props.location.state.dataList;
    return (
            <ul className={classes.AlbumsList}>
                {albums.map(album => {
                    return (
                        <MusicSectionItem 
                            key={album.id}
                            cover={album.cover_medium}
                            title={album.title}
                            artist={album.artist.name}>
                        </MusicSectionItem>
                    )
                })}
            </ul>
    )
}

export default AlbumsList;
