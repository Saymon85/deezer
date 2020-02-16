import React, { Component } from 'react';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';
import axios from 'axios';


class AlbumTrackList extends Component{

    componentWillMount(){
        console.log(this.props.albumData);
    }
    componentDidMount(){
        this.props.loadAlbumData(this.props.location.state.albumID);
        console.log(this.props.location.state);
    }

    render(){
    
        let albumTrackList = <Spinner />

        if(!this.props.albumData.loading){

            const albumData = this.props.albumData.albumData.tracks.data;
            console.log(albumData);
            console.log(this.props.albumData);       
            albumTrackList = (
                <div>
                     Album List {albumData.map( track => {
                        return <p key={track.id}>{track.title} - {track.artist.name}</p>
                     })} 
                </div>
            )
        }
        return albumTrackList;
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