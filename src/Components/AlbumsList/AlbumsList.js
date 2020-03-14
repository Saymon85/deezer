import React from 'react';
import classes from './AlbumsList.css';
import MusicSectionItem from '../MusicSection/MusicSectionItem/MusicSectionItem'; 

const AlbumsList = (props) => {
    const albums = props.location.state.dataList;
    const onAlbumClick = (trackListURL, albumID) => {
        props.history.push({
            pathname: '/albumstracklist',
            state: {
                trackListURL: trackListURL,
                albumID: albumID
            }
        })
    }
    return (
            <ul className={classes.AlbumsList}>
                {albums.map(album => {
                    return (
                        <MusicSectionItem 
                            key={album.id}
                            id={album.id}
                            cover={album.cover_medium}
                            title={album.title}
                            artist={album.artist.name}
                            tracklist={album.tracklist}
                            clicked={(trackListURL, albumID)=> onAlbumClick(trackListURL, albumID)}>
                        </MusicSectionItem>
                    )
                })}
            </ul>
    )
}

export default AlbumsList;
