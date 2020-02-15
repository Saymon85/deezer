import React, { Component } from 'react';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import TrackListHeader from '../../../Components/TrackListComponents/TrackListHeader/TrackListHeader';
import TrackListControls from '../../../Components/TrackListComponents/TrackListControls/TrackListControls';
import TrackListBody from '../../../Components/TrackListComponents/TrackListBody/TrackListBody';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';
import classes from './TrackList.css';
import axios from 'axios';
import { sumPlaylistDuration } from '../../../utilities/utilities';

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
            const data = this.props.trackListData.trackListData.data;
            console.log(this.props.trackListData);
            const duration = sumPlaylistDuration(this.props.trackListData.trackListData.data);
            trackList = (
                <>
                   <TrackListHeader title='Tracks'
                                    creator='Deezer Moods Editor'
                                    thumbnail='https://cdns-images.dzcdn.net/images/user/0331a627b02d7dd43ea5bd8dab276ef4/56x56-000000-80-0-0.jpg'
                                    description="Chart tracks"
                                    numbOfTracks={data.length}
                                    duration={duration}>
                                    
                    </TrackListHeader>
                   <TrackListControls></TrackListControls>
                   <TrackListBody data={this.props.trackListData.trackListData.data}></TrackListBody> 
                </>
            )
        }
        if(this.props.location.state.dataList){
            console.log(this.props.location.state.dataList);
            trackList = (
                <>
                   <TrackListHeader title='Charts'></TrackListHeader>
                   <TrackListControls></TrackListControls>
                   <TrackListBody data={this.props.location.state.dataList}></TrackListBody> 
                </>
            )
        }
        if(this.props.location.state.tracks){
            trackList = (
                <>
                   <TrackListHeader title='TOP 100' img={this.props.location.state.tracks.picture_medium}></TrackListHeader>
                   <TrackListControls></TrackListControls>
                   <TrackListBody data={this.props.location.state.tracks}></TrackListBody> 
                </>
            )
        }
        return (
            <div className={classes.Container}>
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
