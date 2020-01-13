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
    }


    render() {
        let music = <Spinner />;
        if (!this.props.loading){
            const charts = this.props.charts;
            /* console.log(charts); */
            music = ( 
                    <div>
                        <MusicSection 
                            title='Editorial Selection' 
                            data={this.props.selection.data} 
                            loading={this.props.loading}/>
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
        loading: state.editorial.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchEditorialData: () => dispatch(actions.fetchEditorialData())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Music, axios));
