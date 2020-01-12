import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import axios from 'axios';
import MusicSection from '../../Components/MusicSection/MusicSection';
import Spinner from '../../Components/UI/Spinner/Spinner';
import classes from './Music.css';

class Music extends Component {

    componentDidMount(){
        console.log('start fetching');
        this.props.fetchEditorialData();
    }


    render() {
        let music = <Spinner />;
        if (!this.props.loading){
            music =  <MusicSection 
                            title='Editorial Selection' 
                            selection={this.props.selection} 
                            loading={this.props.loading}/>
        }
        return (
            <div className={classes.Music}>
                {music}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selection: state.editorial.selection,
        charts: state.editorial.charts,
        release: state.editorial.release,
        loading: state.editorial.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchEditorialData: () => dispatch(actions.fetchEditorialData())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Music, axios));
