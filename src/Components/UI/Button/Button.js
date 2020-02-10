import React from 'react';
import classes from './Button.css';

const Button = (props) => {
    console.log(classes[props.type]);
    console.log(props.type);
    return <button className={classes[props.type]}><i className={`${props.icon} ${classes.Icon}`}></i>{props.children}</button>
}

export default Button;