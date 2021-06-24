import React from 'react';
import classes from "./Post1.module.css";

const Post1 = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://www.interfax.ru/ftproot/photos/photostory/2019/07/09/week4_700.jpg" />
            {props.messange}
            <div>
            <span> like {props.like}</span>
            </div>
        </div>
    )
}

export default Post1;