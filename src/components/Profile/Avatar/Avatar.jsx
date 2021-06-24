import React from 'react';
import Preloader from '../../common/Preloader/Preloader';

import classes from "./Avatar.module.css"
import ProfileStatus from './ProfileStatus';

const Avatar = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            {/* <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo%21_Logo.svg/1200px-Logo%21_Logo.svg.png"></img>
            </div> */}
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default Avatar;