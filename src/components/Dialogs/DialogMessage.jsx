import React from 'react';
import classes from './Dialogs.module.css';


const DialogMessage = (props) => {
   return(
    <div className={classes.dialog}>
        {props.messange}
    </div>
   );
}



export default DialogMessage;