import React from 'react';
import classes from './ChartsSpecialSection.css';
import { backgroundGradients } from '../../../utilities/helpers';

const ChartSpecialSection = (props) => {
    //console.log(props.data);
    const chartSection = Object.keys(props.data)
           .filter( el => el !== 'podcasts')
           .map((el, i) => {
             const background = backgroundGradients[Math.round(Math.random() * 14)];
             console.log(background);
             return <li key={`${el}${background}`} 
                        style={{backgroundImage:`var(${background})`}}>
                        <div>{el}</div></li>;
    });
 
    console.log(chartSection);
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


{/* <li key={111} style={{backgroundImage: 'linear-gradient(45deg, #DC4C11, #FEAB2E)'}}><div>Tracks</div></li> */}