import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import axios from 'axios';
import MusicSection from './MusicSection/MusicSection';
import MusicChartsSection from '../../Components/MusicSection/MusicChartsSection/MusicChartsSection';
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
        //  **** set timeout for testing purposes ****
        this.props.fetchEditorialData();   
        console.log(this.props.goodOldTimes);
        console.log(this.props.top100);
        console.log(this.props.editorialRelease);
    }

    onAlbumClick = (trackListURL, albumID) => {
        this.props.history.push({
            pathname: '/albumstracklist',
            state: { trackListURL : trackListURL,
                     albumID: albumID
            }
        })
    }

    onTracksClick = (trackList) => {
        this.props.history.push({
            pathname:'/trackslist',
            state: { trackListURL: trackList }
        });
    }
    
    onChartsClick = (dataList, pathTo, tracksChartInfo) => {
        const path = `/${pathTo}list`;
        this.props.history.push({
            pathname: path,
            state: { dataList: dataList,
                     tracksChartInfo: tracksChartInfo   
            }
        })
    }

    onTopAndGoodOldTimesClick = (playlistData) => {
        console.log(playlistData);
        this.props.history.push({
            pathname: '/trackslist',
            state: { playlistData: playlistData }
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
                            elementId='editorialSelection' 
                            title='Editorial Selection' 
                            data={this.props.editorialSelection} 
                            loading={this.props.loading}
                            clicked={(trackList, albumID) => this.onAlbumClick(trackList, albumID)}
                            artist={true} />
                        <MusicSection
                            elementId='editorialRelease' 
                            title='Editorial Release'
                            data={this.props.editorialRelease}
                            clicked={(trackList, albumID) => this.onAlbumClick(trackList, albumID)}
                            artist={true} />
                        <MusicChartsSection
                            title='Editorial Charts'
                            editorial={true}
                            charts={true}
                            data={this.props.editorialCharts}
                            clicked={(dataList, pathTo, tracksChartInfo) => this.onChartsClick(dataList, pathTo, tracksChartInfo)} />    
                        <MusicSection
                            elementId='radioTop'
                            title='Radio Top'
                            data={this.props.radioTop}
                            clicked={(trackList) => this.onTracksClick(trackList)} />
                        <MusicSection 
                            elementId='radioLists'
                            title='Radio Lists'
                            data={this.props.radioLists}
                            clicked={(trackList) => this.onTracksClick(trackList)} />
                        <MusicChartsSection
                            title='Global Charts'
                            charts={true}
                            data={this.props.charts}
                            clicked={(dataList, pathTo) => this.onChartsClick(dataList, pathTo)} />       
                        <MusicSection
                            elementId='Top100'
                            title='Top 100'
                            data={this.props.top100}
                            clicked={(playlistData) => this.onTopAndGoodOldTimesClick(playlistData)} />
                        <MusicSection 
                            elementId='goodOldTimes'
                            title='Good Old Times'
                            data={this.props.goodOldTimes}
                            clicked={(playlistData) => this.onTopAndGoodOldTimesClick(playlistData)} />        
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
        editorialSelection: state.editorial.selection.data,
        editorialRelease: state.editorial.release,
        editorialCharts: state.editorial.charts,
        radioGenres: state.radio.genres,
        radioTop: state.radio.top.data,
        radioLists: state.radio.lists.data,
        charts: state.charts.charts,
        top100: state.playlistData.top100.data,
        goodOldTimes: state.playlistData.goodOldTimes.data,
        loading: state.editorial.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchEditorialData: () => dispatch(actions.fetchEditorialData()),
        fetchRadioData: () => dispatch(actions.fetchRadioData()),
        fetchChartsData: () => dispatch(actions.fetchChartsData()),
        fetchTop100Data: () => dispatch(actions.fetchTop100Data()),
        fetchGoodOldTimesData: () => dispatch(actions.fetchGoodOldTimesData())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Music, axios);
