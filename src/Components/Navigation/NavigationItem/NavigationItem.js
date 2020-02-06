import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.css'; 

const NavigationItem = (props) => {
    
    return (
       <li className={classes.NavigationItem +" "+props.activeClass}>
         <NavLink exact={props.exact} to={props.to} activeClassName={classes.active} onClick={props.clicked}>
             <i className={props.icon}></i>
             <span>{props.children}</span>
         </NavLink>
       </li> 

    )
}

export default NavigationItem;
