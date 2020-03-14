import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../store/actions/index';

class ArtistProfile extends Component {
    
    componentDidMount(){
        const artistID = this.props.location.state.artistID;
        this.props.onLoadArtistData(artistID);
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoadArtistData: (artistID) => dispatch(actions.fetchArtistData(artistID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistProfile)
