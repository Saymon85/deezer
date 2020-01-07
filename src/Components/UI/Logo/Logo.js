import React from 'react';
import deezerLogo from '../../../assets/images/logo/PNG/Colored_Full_Black@2x.png';
import classes from './Logo.css';

const Logo = () => {
    return (
        <div className={classes.Logo}  style={{display: 'inline-block', width: '20%'}}>
            <img src={deezerLogo} alt="Logo" />
        </div>
    )
}

export default Logo;
