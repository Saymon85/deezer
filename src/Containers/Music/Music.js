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

    state = {
        loading: true
    }

    componentDidMount(){

        this.props.fetchRadioData();
        this.props.fetchChartsData();
        this.props.fetchTop100Data();
        this.props.fetchGoodOldTimesData();
        this.props.fetchEditorialData();   

    }

    onAlbumClick = (trackListURL) => {
        this.props.history.push({
            pathname: '/albumstracklist',
            state: { trackListURL : trackListURL}
        })
    }

    onTracksClick = (trackList) => {
        console.log('clicked');
        console.log(trackList)
        this.props.history.push({
            pathname:'/trackslist',
            state: { trackListURL: trackList }
        });
    }
    
    onChartsTracksClick = (dataList, pathTo) => {
        this.props.history.push({
            pathname: `/${pathTo}list`,
            state: { dataList: dataList }
        })
    }
    onTopAndGoodOldTimesClick = (tracksArray) => {
        this.props.history.push({
            pathname: '/trackslist',
            state: { tracks: tracksArray }
        })
    }
    onMusicClick = () => {
        console.log(this.props.editorialRelease);
        console.log(this.props.radioGenres);
        console.log(this.props.radioTop);
        console.log(this.props.radioLists);
        console.log(this.props.charts);
        console.log(this.props.top100);
        console.log(this.props.goodOldTimes);
    } 

    render() {
        let music = <Spinner />;
        if (!this.props.loading){
            music = ( 
                    <div>
                        <MusicSection 
                            title='Editorial Selection' 
                            data={this.props.editorialSelection.data} 
                            loading={this.props.loading}
                            clicked={(trackList) => this.onAlbumClick(trackList)}
                            artist={true}/>
                        <ChartsSpecialSection
                            title='Editorial Charts'
                            charts={true}
                            data={this.props.editorialCharts}
                            clicked={(dataList, pathTo) => this.onChartsTracksClick(dataList, pathTo)} />    
                        <MusicSection 
                            title='Editorial Release'
                            data={this.props.editorialRelease}
                            clicked={(trackList) => this.onAlbumClick(trackList)}
                            artist={true} />
                        <MusicSection
                            title='Radio Top'
                            data={this.props.radioTop.data}
                            clicked={(trackList) => this.onTracksClick(trackList)} />
                        <MusicSection 
                            title='Radio Lists'
                            data={this.props.radioLists.data}
                            clicked={(trackList) => this.onTracksClick(trackList)} />
                        <ChartsSpecialSection
                            title='Global Charts'
                            charts={true}
                            data={this.props.charts}
                            clicked={(dataList, pathTo) => this.onChartsTracksClick(dataList, pathTo)} />       
                        <MusicSection
                            title='Top 100'
                            data={this.props.top100}
                            clicked={(tracksArray) => this.onTopAndGoodOldTimesClick(tracksArray)} />
                        <MusicSection 
                            title='Good Old Times'
                            data={this.props.goodOldTimes}
                            clicked={(tracksArray) => this.onTopAndGoodOldTimesClick(tracksArray)} />        
                    </div>  
            )
        }
        return (
            <div className={classes.Music} onClick={this.onMusicClick}>
                {music}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        editorialSelection: state.editorial.selection,
        editorialRelease: state.editorial.release,
        editorialCharts: state.editorial.charts,
        radioGenres: state.radio.genres,
        radioTop: state.radio.top,
        radioLists: state.radio.lists,
        charts: state.charts.charts,
        top100: state.top100.top100Data,
        goodOldTimes: state.goodOldTimes.goodOldTimesData,
        loading: state.editorial.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchEditorialData: () => dispatch(actions.fetchEditorialData()),
        fetchRadioData: () => dispatch(actions.fetchRadioData()),
        fetchChartsData: () => dispatch(actions.fetchChartsData()),
        fetchTop100Data: () => dispatch(actions.fetchTop100Data()),
        fetchGoodOldTimesData: () => dispatch(actions.fetchGoodOldTimesData())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Music, axios));
