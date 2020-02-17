import React, { Component } from 'react';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';
import axios from 'axios';
import TrackListHeader from '../../../Components/TrackListComponents/TrackListHeader/TrackListHeader';
import TrackListControls from '../../../Components/TrackListComponents/TrackListControls/TrackListControls';
import TrackListBody from '../../../Components/TrackListComponents/TrackListBody/TrackListBody';
import { convertSecondsToHours, convertReleaseDate } from '../../../utilities/utilities';


class AlbumTrackList extends Component{

    componentDidMount(){
        this.props.loadAlbumData(this.props.location.state.albumID);
    }

    render(){
    
        let albumTrackList = <Spinner />
        if(!this.props.albumData.loading){
            const albumData = this.props.albumData.albumData;
            const duration = convertSecondsToHours(albumData.duration);
            const releaseDate = convertReleaseDate(albumData.release_date)
            console.log(releaseDate);
            console.log(this.props.albumData);       
            albumTrackList = (
                <>
                    <TrackListHeader 
                        title={albumData.title}
                        img={albumData.cover_big}
                        thumbnail={albumData.artist.picture_small}
                        creator={albumData.artist.name}
                        numbOfTracks={albumData.nb_tracks}
                        duration={duration}
                        fans={albumData.fans}
                        releaseDate={releaseDate}>    
                    </TrackListHeader>
                    <TrackListControls share={albumData.share}></TrackListControls>
                    <TrackListBody data={albumData.tracks.data}></TrackListBody>
                    <div>
                        {albumData.tracks.data.map( track => {
                            return <p key={track.id}>{track.title} - {track.artist.name}</p>
                        })} 
                    </div>
                </>
            )
        }
        return <div style={{width: '100%'}}>{albumTrackList}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        albumTrackListData: state.trackList,
        albumData: state.album
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadAlbumTrackListData: (trackListURL) => dispatch(actions.fetchTrackListData(trackListURL)),
        loadAlbumData: (albumID) => dispatch(actions.fetchAlbumData(albumID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumTrackList, axios);