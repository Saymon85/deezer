import React, { Component } from 'react';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';
import axios from 'axios';


class AlbumTrackList extends Component{

    componentDidMount(){
        this.props.loadAlbumTrackListData(this.props.location.state.trackListURL);
    }

    render(){
        
        let albumTrackList = <Spinner />

        if(!this.props.albumTrackListData.loading){
            
            albumTrackList = (
                <div>
                     Album List {this.props.albumTrackListData.trackListData.data.map( track => {
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
        albumTrackListData: state.trackList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadAlbumTrackListData: (trackListURL) => dispatch(actions.fetchTrackListData(trackListURL))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumTrackList, axios);