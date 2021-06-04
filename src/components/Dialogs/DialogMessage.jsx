import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';


const DialogMessage = (props) => {
   return(
    <div className={classes.dialog}>
        {props.messange}
    </div>
   );
}



export default DialogMessage;