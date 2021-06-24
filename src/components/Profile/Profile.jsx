import React from 'react';

import Avatar from "./Avatar/Avatar"

import PostInfoContainer from './PostInfo/PostInfoContainer';
import Preloader from '../common/Preloader/Preloader';



const Profile = (props) => {

if(!props.profile){
    return <Preloader />
}

    return (
        <div>
            <Avatar 
            profile={props.profile} 
            status={props.status}
            updateStatus={props.updateStatus} />
            <PostInfoContainer />

        </div>
    )
}

export default Profile;