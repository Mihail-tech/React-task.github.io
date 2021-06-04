import React from 'react';
import classes from "./Post1.module.css";

const Post1 = (props) => {
    return (
        <div className={classes.item}>
            <img src="" />
            {props.messange}
            <div>
            <span> like {props.like}</span>
            </div>
        </div>
    )
}

export default Post1;