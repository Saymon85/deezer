import React from 'react';
import classes from './Button.css';

const Button = (props) => {
    return <button className={classes[props.type]}><i className={props.icon}></i>{props.children}</button>
}

export default Button;