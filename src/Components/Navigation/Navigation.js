import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './Navigation.css';


const Navigation = () => {

    const toggleActiveClass = (e) => {
        document.querySelectorAll('#Navigation ul li').forEach( el => {
            el.classList.remove(classes.Active);
            e.target.parentNode.parentNode.classList.add(classes.Active);
        })
    }

    return (
        <div id='Navigation' className={classes.Navigation}>
          <ul>
              <NavigationItem 
                    to='/' 
                    icon='fas fa-music' 
                    exact 
                    activeClass={classes.Active} 
                    clicked={toggleActiveClass}>Music</NavigationItem>
              <NavigationItem to='/search' icon='fas fa-th-large' clicked={toggleActiveClass}>Search</NavigationItem>
              <NavigationItem to='/favorites' icon='far fa-heart' clicked={toggleActiveClass}>Favorites</NavigationItem>
          </ul>  
        </div>
    )
}

export default Navigation;

 