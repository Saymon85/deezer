import React, { Component } from 'react';
import Spinner from '../../Components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import axios from 'axios';

class TrackList extends Component {

    componentDidMount(){
        console.log(this.props.history.location.state.trackListURL);
        this.props.loadTrackListData(this.props.history.location.state.trackListURL);
    }
    render(){
        console.log(this.props);
        let trackList = <Spinner />
        if(!this.props.trackListData.loading){
            trackList = (
                <div>
                    Track List 
                    {this.props.trackListData.trackListData.data.map(item => {
                        return <p key={item.id}>{item.title}</p>
                    })}
                </div>
            )
        }
        return (
            trackList
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
