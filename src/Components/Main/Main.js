import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import Content from '../Content/Content';
import classes from './Main.css';



const Main = () => {
    return (
        <div className={classes.Main}>
            <Navigation />
            <Content />
        </div>
    )
}

export default Main;
