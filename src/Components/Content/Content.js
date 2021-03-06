import React from 'react';
import Music from '../../Containers/Music/Music';
import Search from '../../Containers/Search/Search';
import Favorites from '../../Containers/Favorites/Favorites';
import TrackList from '../../Containers/TrackLists/TrackList/TrackList';
import AlbumTrackList from '../../Containers/TrackLists/AlbumTrackList/AlbumTrackList';
import AlbumsList from '../AlbumsList/AlbumsList';
import ArtistsList from '../ArtistsList/ArtistsList';
import PlaylistsList from '../PlaylistsList/PlaylistsList';
import classes from './Content.css';
import { Switch, Route, Redirect } from 'react-router-dom';

const Content = () => {
    return (
        <div className={classes.Content}>
           <Switch>
              <Route path='/search' component={Search}></Route>
              <Route path='/favorites' component={Favorites}></Route>
              <Route path='/trackslist' component={TrackList}></Route>
              <Route path='/albumstracklist' component={AlbumTrackList}></Route>
              <Route path='/albumslist' component={AlbumsList}></Route>
              <Route path='/artistslist' component={ArtistsList}></Route>
              <Route path='/playlistslist' component={PlaylistsList}></Route>
              <Route path='/' exact component={Music}></Route>
              <Redirect to='/' /> 
            </Switch>
        </div>
    )
}

export default Content;
