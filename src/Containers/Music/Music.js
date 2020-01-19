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
        /* console.log('start fetching'); */
/*         Promise.all([
            this.props.fetchEditorialData(),
            this.props.fetchRadioData(),
            this.props.fetchChartsData(),
            this.props.fetchTop100Data(),
            this.props.fetchGoodOldTimesData()
        ]).then(res => {
            console.log(res);
            this.setState({loading: false});
        }).catch(err => console.log(err)); */
        this.props.fetchRadioData();
        this.props.fetchChartsData();
        this.props.fetchTop100Data();
        this.props.fetchGoodOldTimesData();
        this.props.fetchEditorialData();    

    }

    onTracksClick = () => {
        console.log('clicked');
        this.props.history.push('/tracklist');
    }
    
    onMusicClick = () => {
        console.log(this.props.top100);
        console.log(this.props.goodOldTimes);
        console.log(this.props.goodOldTimes);
        console.log(this.props.genres);
        console.log(this.props.top);
        console.log(this.props.charts);

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
                            data={this.props.editorialCharts} />    
                        <MusicSection 
                            title='Editorial Release'
                            data={this.props.release}
                       />
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
        selection: state.editorial.selection,
        release: state.editorial.release,
        editorialCharts: state.editorial.charts,
        genres: state.radio.genres,
        top: state.radio.top,
        lists: state.radio.lists,
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
