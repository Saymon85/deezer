import React, { Component } from 'react';
import axios from '../axios-instance';

class Paragraph extends Component {
    
    state = {
        albumData: null,
        selection: {}
    }

    componentDidMount(){
        axios.get('/search/user?q=nevena')
         .then( response => {
             console.log(response);
             this.setState({albumData: response.data});
         })
         .catch(err => {
             console.log(err);
         });
         axios.get('/editorial/0/selection')
          .then(res => {
             console.log(res.data);
          })
          .catch(err => {
              console.log(err);
          })

    }
    render() {
        const style = {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'left',
            width: '100%',
            margin: 0,
            padding: '0 10%',
            fontFamily: "Mabry Pro Bold"
        }
        let userSummary = null;
        if(this.state.albumData){
            console.log(this.state.albumData.data);
           userSummary = this.state.albumData.data.map( user => {
               return (
                   <div key={user.id} style={{ marginLeft: '2.5%', width: '20%'}}>
                    <img src={user.picture_medium} alt="Nevena"/>
                    <p>{user.name}</p>
                   </div>                     
               )
            } )
        }
        return (
            <div style={style}>
                {userSummary}
            </div>
        )
    }
}

export default Paragraph;

