import React from 'react';
import classes from './MusicChartsSection.css';
import { backgroundGradients } from '../../../utilities/helpers';

const MusicChartsSection = (props) => {

    const chartSection = Object.keys(props.data)
           .filter( chart => chart !== 'podcasts')
           .map( chart => {
             const background = backgroundGradients[Math.round(Math.random() * 14)];
             let tracksChartInfo = null;
             if(chart === 'tracks'){
                 tracksChartInfo = {
                     title: props.editorial ? 'Editorial Tracks Chart' : 'Tracks Chart',
                     creator: 'Deezer Charts',
                     creatorPicture: 'https://e-cdns-images.dzcdn.net/images/user/0331a627b02d7dd43ea5bd8dab276ef4/56x56-000000-80-0-0.jpg',
                     description: props.editorial ? 'Editorial Charts track list' : 'Top tracks chart'
                 }
             }
             console.log(props.data[chart]);
             return <li key={`${chart}${background}`} 
                        style={{backgroundImage:`var(${background})`}}>
                          <div onClick={() => props.clicked(props.data[chart].data, chart, tracksChartInfo)}>
                             {chart}
                          </div>
                    </li>;
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

