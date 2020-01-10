import React from 'react';
import Music from '../../Containers/Music/Music';
import Search from '../../Containers/Search/Search';
import Favorites from '../../Containers/Favorites/Favorites';
import classes from './Content.css';
import { Switch, Route, Redirect } from 'react-router-dom';

const Content = () => {
    return (
        <div className={classes.Content}>
           <Switch>
              <Route path='/search' component={Search}></Route>
              <Route path='/favorites' component={Favorites}></Route>
              <Route path='/' exact component={Music}></Route>
              <Redirect to='/' /> 
            </Switch>
        </div>
    )
}

export default Content;
