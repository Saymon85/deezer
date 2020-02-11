import React, { Component } from 'react';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import TrackListHeader from '../../../Components/TrackListComponents/TrackListHeader/TrackListHeader';
import TrackListControls from '../../../Components/TrackListComponents/TrackListControls/TrackListControls';
import TrackListBody from '../../../Components/TrackListComponents/TrackListBody/TrackListBody';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';
import axios from 'axios';

class TrackList extends Component {

    componentDidMount(){
        console.log(this.props.history.location.state.trackListURL);
        if(this.props.location.state.trackListURL){
            this.props.loadTrackListData(this.props.history.location.state.trackListURL);
        }
    }
    render(){
        console.log(this.props);
        let trackList = <Spinner />
        if(!this.props.trackListData.loading){
            
            
            trackList = (
                <>
                    <TrackListHeader title={null}></TrackListHeader>
                                <TrackListControls></TrackListControls>
                                <TrackListBody 
                                     data={this.props.trackListData.trackListData.data}></TrackListBody> 
                    {this.props.trackListData.trackListData.data.map(track => {
                        return  <p key={track.id}>{track.title}</p>    
                    })}
                </>
            )
        }
        if(this.props.location.state.dataList){
            trackList = (
                <div>
                    Track List
                    {this.props.location.state.dataList.map( track => {
                        return <p key={track.id}>{track.title} - {track.artist.name}</p>
                    })}
                </div>
            )
        }
        if(this.props.location.state.tracks){
            trackList = (
                <div>
                    {this.props.location.state.tracks.map(track => {
                        return <p key={track.id}>{track.title} - {track.artist.name}</p>
                    })}
                </div>
            )
        }
        return (
            <div className='Container'>
                {trackList}
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        trackListData: state.trackList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadTrackListData: (trackListURL) => dispatch(actions.fetchTrackListData(trackListURL))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackList, axios);
