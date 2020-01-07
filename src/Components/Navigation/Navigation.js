import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import { NavLink, Route, Switch, Router } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <ul>
                <NavigationItem icon='music'><NavLink to='/'>Music</NavLink></NavigationItem>
                <NavigationItem icon='th-large'><NavLink to='/search'>Search</NavLink></NavigationItem>
                <NavigationItem icon='heart'><NavLink to='/favorites'>Favorites</NavLink></NavigationItem>
            </ul>
            <Switch>
                <Route to='/search' component={null}></Route>
                <Route to='/favorites' component={null}></Route>
                <Route to='/' component={null}></Route>
            </Switch>
        </div>
    )
}

export default Navigation;
