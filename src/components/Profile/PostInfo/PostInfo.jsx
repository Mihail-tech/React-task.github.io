import React from 'react';
import Post1 from '../Post/Post1';
import classes from "./PostInfo.module.css"


const PostInfo = (props) => {


    let PostsData =[
        {id:1, messange:"hi", like:12},
        {id:2, messange:"hi", like:23}
    ]
    let PostsElement = PostsData.map( post =>  <Post1 messange={post.messange} like={post.like}/> )

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </div>
            <div className={classes.posts}>
                posts
                {PostsElement}
            </div>
        </div>
    )
}


export default PostInfo;