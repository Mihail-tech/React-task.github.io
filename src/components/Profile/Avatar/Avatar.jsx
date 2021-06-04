import React from 'react';
import classes from "./Avatar.module.css"

const Avatar = (props) => {
    return (
        <div>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo%21_Logo.svg/1200px-Logo%21_Logo.svg.png"></img>
            </div>
            <div className={classes.descriptionBlock}>
                ava
            </div>
        </div>
    )
}

export default Avatar;