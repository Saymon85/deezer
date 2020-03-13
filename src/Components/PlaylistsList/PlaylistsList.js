import React from 'react';
import classes from './PlaylistsList.css';
import MusicSectionItem from '../MusicSection/MusicSectionItem/MusicSectionItem';

const PlaylistsList = (props) => {

    const playlists = props.location.state.dataList;
    const onPlaylistClick = (tracklist, playlistID) => {
        console.log(playlistID);
         props.history.push({
            pathname: '/trackslist',
            state: {
                tracklist: tracklist,
                playlistID: playlistID
            }
        })
    } 
    return (
        <ul className={classes.PlaylistsList}>
            {playlists.map(playlist => {
                return (
                    <MusicSectionItem
                        key={playlist.id}
                        id={playlist.id}
                        cover={playlist.picture_big}
                        title={playlist.title}
                        tracklist={playlist.tracklist}
                        artist={`Tracks: ${playlist.nb_tracks}`}
                        clicked={(tracklist, playlistID) => onPlaylistClick(tracklist, playlistID)}>
                    </MusicSectionItem>
                )
            })}
        </ul>
    )
}

export default PlaylistsList;
