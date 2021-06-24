import React from 'react';
import classes from "./Users.module.css"

import userPhoto from '../../assers/img/user.png';
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Preloader/Paginator/Paginator';




let Users = ({currentPage, onPageChanged, totalItemCount, pageSize, users, ...props}) => {
    
    return (
        <div>
           <Paginator 
            currentPage={currentPage} 
            onPageChanged={onPageChanged} 
            totalItemCount={totalItemCount} 
            pageSize={pageSize} 
           />
            {
                users.map(user => 
                    <div key={user.id}>
                        <span> 
                            <div>
                                <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small != null ? 
                                    user.photos.small : 
                                    userPhoto} className={classes.userPhoto}/>
                                </NavLink>
                            </div>
                            <div>
                                {user.followed ? 
                                <button disabled={props.followingInProgress.some(id => id === user.id)} onClick = {() => {
                                        props.follow( user.id);

                                        
//274619bf-c707c44db-90e2-34bfeccdc4fc
                                    }
                                }> Follow</button> 
                                : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick = {() => {
                                    props.unfollow(user.id);

                                    }}>Unfollow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{"user.location.city"}</div>
                                <div>{"user.location.country"}</div>
                            </span>
                        </span>
                    </div>
                )
            }
        </div>
    )
}



export default Users;