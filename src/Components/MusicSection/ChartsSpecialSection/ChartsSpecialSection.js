import React from 'react';
import classes from './ChartsSpecialSection.css';
import { backgroundGradients } from '../../../utilities/helpers';

const ChartSpecialSection = (props) => {
    console.log(props.data);
    let chartSection = null;
    for(let item in props.data){
        console.log(item);
        const background = backgroundGradients[Math.round(Math.random() * 15)];
        chartSection = Object.keys(props.data)
            .filter( el => el !== 'podcasts')
            .map((el, i) => {
                return <li key={`${el}${background}`} style={{backgroundColor: background}}>{el}</li>
        });
    }  
    console.log(chartSection);
    return (
        <div className={classes.ChartSection}>
            <ul>
                {chartSection}
            </ul>
        </div>
    )
}

export default ChartSpecialSection;
