import React, { Component } from 'react';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';
import axios from 'axios';


class AlbumTrackList extends Component{
    render(){
        return <div>
               Album List {this.props.location.state.trackListURL} 
        </div>
    }
}

export default AlbumTrackList;