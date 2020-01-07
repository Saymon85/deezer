import React from 'react';
import classes from './NavigationItem.css';

const NavigationItem = (props) => {
    
    return (
        <li className={classes.NavigationItem}>
            <i className={`fas fa-${props.icon}`}></i>
            <span>{props.children}</span>
        </li>
    )
}

export default NavigationItem;
