import React from 'react';
import classes from './PlaylistsList.css';
import MusicSectionItem from '../MusicSection/MusicSectionItem/MusicSectionItem';

const PlaylistsList = (props) => {
    const playlists = props.location.state.dataList; 
    return (
        <ul className={classes.PlaylistsList}>
            {playlists.map(playlist => {
                return (
                    <MusicSectionItem
                        key={playlist.id}
                        cover={playlist.picture_medium}
                        title={playlist.title}
                        artist={`Tracks: ${playlist.nb_tracks}`}>
                    </MusicSectionItem>
                )
            })}
        </ul>
    )
}

export default PlaylistsList;
