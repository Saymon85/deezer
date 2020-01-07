import React from 'react';

const NavigationItem = (props) => {
    
    return (
        <li>
            <i className={`fas fa-${props.icon}`}></i>
            <span>{props.children}</span>
        </li>
    )
}

export default NavigationItem;
