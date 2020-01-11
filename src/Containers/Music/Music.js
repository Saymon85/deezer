import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import axios from 'axios';

class Music extends Component {
    
    componentDidMount(){
        this.props.fetchEditorialData();
    }
    ispisiUKonzoli = () => {
        console.log(this.props.selection);
        console.log(this.props.charts);
        console.log(this.props.release);
    }

    render() {
        return (
            <div onClick={this.ispisiUKonzoli}>
                Music Component
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selection: state.editorial.selection,
        charts: state.editorial.charts,
        release: state.editorial.release
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchEditorialData: () => dispatch(actions.fetchEditorialData())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Music, axios));
