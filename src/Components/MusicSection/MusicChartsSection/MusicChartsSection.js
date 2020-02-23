import React from 'react';
import classes from './MusicChartsSection.css';
import { backgroundGradients } from '../../../utilities/helpers';

const MusicChartsSection = (props) => {

    const chartSection = Object.keys(props.data)
           .filter( el => el !== 'podcasts')
           .map((el, i) => {
             const background = backgroundGradients[Math.round(Math.random() * 14)];
             let tracksChartInfo = null;
             if(el === 'tracks'){
                 tracksChartInfo = {
                     title: props.editorial ? 'Editorial Tracks Chart' : 'Tracks Chart',
                     creator: 'Deezer Charts',
                     creatorPicture: 'https://e-cdns-images.dzcdn.net/images/user/0331a627b02d7dd43ea5bd8dab276ef4/56x56-000000-80-0-0.jpg',
                     description: props.editorial ? 'Editorial Charts track list' : 'Top tracks chart'
                 }
             }
             console.log(props.data[el]);
             return <li key={`${el}${background}`} 
                        style={{backgroundImage:`var(${background})`}}>
                        <div onClick={() => props.clicked(props.data[el].data, el, tracksChartInfo)}>{el}</div></li>;
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

export default MusicChartsSection;

