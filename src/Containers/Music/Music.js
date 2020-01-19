import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import axios from 'axios';
import MusicSection from '../../Components/MusicSection/MusicSection';
import ChartsSpecialSection from '../../Components/MusicSection/ChartsSpecialSection/ChartsSpecialSection';
import Spinner from '../../Components/UI/Spinner/Spinner';
import classes from './Music.css';

class Music extends Component {

    componentDidMount(){
        /* console.log('start fetching'); */
        this.props.fetchEditorialData();
        this.props.fetchRadioData();
        this.props.fetchChartsData();
        this.props.fetchTop100Data();  
    }

    onTracksClick = () => {
        console.log('clicked');
        this.props.history.push('/tracklist');
    } 

    render() {
        let music = <Spinner />;
        if (!this.props.loading){
            music = ( 
                    <div>
                        <MusicSection 
                            title='Editorial Selection' 
                            data={this.props.selection.data} 
                            loading={this.props.loading}
                            clicked={this.onTracksClick}/>
                        <ChartsSpecialSection
                            title='Editorial Charts'
                            charts={true}
                            data={this.props.charts} />    
                        <MusicSection 
                            title='Editorial Release'
                            data={this.props.release}
                       />
                    </div>  
            )
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
        genres: state.radio.genres,
        top: state.radio.top,
        lists: state.radio.lists,
        top100: state.top100.top100,
        loading: state.editorial.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchEditorialData: () => dispatch(actions.fetchEditorialData()),
        fetchRadioData: () => dispatch(actions.fetchRadioData()),
        fetchChartsData: () => dispatch(actions.fetchChartsData()),
        fetchTop100Data: () => dispatch(actions.fetchTop100Data())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Music, axios));
