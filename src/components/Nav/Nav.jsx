import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';



const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.table}>
                <li className={`${classes.item} ${classes.active}`}>
                    <NavLink to="/profile" activeClassName={classes.active} >Profile</NavLink>
                </li>
                <li className={`${classes.item} ${classes.active}`}>
                    <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
                </li>
                <li className={`${classes.item} ${classes.active}`}>
                    <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
                </li>
                <li className={`${classes.item} ${classes.active}`}>
                    <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
                </li>
                <li className={`${classes.item} ${classes.active}`}>
                    <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
                </li>
                <li className={`${classes.item} ${classes.active}`}> 
                    <NavLink to="/recomendation" activeClassName={classes.active}>Recomendation frends</NavLink>
                </li>
            </ul>
        </nav>
    )
}


export default Nav;