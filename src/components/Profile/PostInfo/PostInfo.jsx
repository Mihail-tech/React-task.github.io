import React from 'react';
import Post1 from '../Post/Post1';
import classes from "./PostInfo.module.css"
import { reduxForm, Field }  from 'redux-forms/lib/reducer'
import { maxLengthCreator, required } from '../../../helper/validator/validators';
import { Textarea } from '../../common/Preloader/FormsControls/FormsControls';
import { form } from 'redux-forms/lib/containers';




const PostInfo = React.memo(props => {


    let PostsElement = [...props.PostsData]
        .revers()
        .map( post => 
            <Post1 messange={post.messange} like={post.like}/> 
    );

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
        
       
    }


    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <LoginReduxFrom onSubmit={onAddPost} />
            <div className={classes.posts}>
                posts
                {PostsElement}
            </div>
        </div>
    )
})


const maxLength = maxLengthCreator(15)

const addNewPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field name='newPostText' component={Textarea} placeholder={"post message"}
                validate={[required, maxLength]} />
            </div>
             <div>
                <button >Send</button>
             </div>
        </form>
    )
}


const LoginReduxFrom = reduxForm ({
    // a unique name for the form
    formsReducer: 'ProfileAddNewPostForm'
    
  })(addNewPostForm)


export default PostInfo;