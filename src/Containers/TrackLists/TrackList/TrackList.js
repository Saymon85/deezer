import React, { Component } from 'react';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import TrackListHeader from '../../../Components/TrackListComponents/TrackListHeader/TrackListHeader';
import TrackListControls from '../../../Components/TrackListComponents/TrackListControls/TrackListControls';
import TrackListBody from '../../../Components/TrackListComponents/TrackListBody/TrackListBody';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';
import classes from './TrackList.css';
import axios from 'axios';
import { sumPlaylistDuration, convertSecondsToHours } from '../../../utilities/utilities';

class TrackList extends Component {

    componentDidMount(){
        const trackListURL = this.props.location.state.trackListURL;
        if(trackListURL){
            this.props.loadTrackListData(trackListURL);
        }
    }
    render(){
        console.log(this.props);
        let trackList = <Spinner />;

        if(!this.props.trackListData.loading){
            const data = this.props.trackListData.trackListData.data;
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
            const tracksChartInfo = this.props.location.state.tracksChartInfo;
            const tracksData = this.props.location.state.dataList;
            const duration = sumPlaylistDuration(tracksData);

            trackList = (
                <>
                   <TrackListHeader title={tracksChartInfo.title}
                                    creator={tracksChartInfo.creator}
                                    thumbnail={tracksChartInfo.creatorPicture}
                                    description={tracksChartInfo.description}
                                    numbOfTracks={tracksData.length}
                                    duration={duration}>
                   </TrackListHeader>
                   <TrackListControls></TrackListControls>
                   <TrackListBody data={this.props.location.state.dataList}></TrackListBody> 
                </>
            )
        }

        if(this.props.location.state.playlistData.tracks){
            const playlist = this.props.location.state.playlistData;
            const duration = convertSecondsToHours(playlist.duration);

            trackList = (
                <>
                   <TrackListHeader title={playlist.title} 
                                    img={playlist.picture_medium}
                                    creator={playlist.creator.name}
                                    thumbnail='https://api.deezer.com/user/637006841/image'
                                    description={playlist.description ? playlist.description : 'Discover the most played songs on Deezer every day'}
                                    numbOfTracks={playlist.nb_tracks}
                                    fans={playlist.fans}
                                    duration={duration}>    
                   </TrackListHeader>
                   <TrackListControls share={playlist.share}></TrackListControls>
                   <TrackListBody data={playlist.tracks.data}></TrackListBody> 
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
