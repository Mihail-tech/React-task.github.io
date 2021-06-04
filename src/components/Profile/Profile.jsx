import React from 'react';
import Post1 from './Post/Post1';
import classes from './Profile.module.css';
import Avatar from "./Avatar/Avatar"
import PostInfo from './PostInfo/PostInfo';


const Profile = () => {
    return (
        <div>
            <Avatar />
            <PostInfo />

        </div>
    )
}

export default Profile;