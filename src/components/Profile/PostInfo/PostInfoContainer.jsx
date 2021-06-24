
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../redux/profile-reducer'
import PostInfo from './PostInfo';





const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        PostsData:state.profilePage.PostsData,
        newPostText:state.profilePage.newPostText
    }
}

const PostInfoContainer = connect(mapStateToProps, mapDispatchToProps)(PostInfo);

export default PostInfoContainer;