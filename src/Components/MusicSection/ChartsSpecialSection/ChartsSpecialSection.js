import React from 'react';
import classes from './ChartsSpecialSection.css';
import { backgroundGradients } from '../../../utilities/helpers';

const ChartSpecialSection = (props) => {

    const chartSection = Object.keys(props.data)
           .filter( el => el !== 'podcasts')
           .map((el, i) => {
             const background = backgroundGradients[Math.round(Math.random() * 14)];
             return <li key={`${el}${background}`} 
                        style={{backgroundImage:`var(${background})`}}>
                        <div>{el}</div></li>;
    });

    return (
        <div className={classes.ChartSection}>
            <h2>{props.title}</h2>
            <ul>
                {chartSection}
            </ul>
        </div>
    )
}

export default ChartSpecialSection;

