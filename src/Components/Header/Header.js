import React from 'react';
import Logo from '../UI/Logo/Logo';
import classes from './Header.css';

const Header = () => {
    return (
        <div className="Header">
            <Logo className="Logo"/>
            <h1 className="Heading">Saymon's Deezer app</h1>
        </div>
    )
}

export default Header;
