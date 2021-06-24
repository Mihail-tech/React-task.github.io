import { profileAPI, usersAPI } from "../../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

let initialState = {
    PostsData:[
        {id:1, messange:"hi", like:12},
        {id:2, messange:"hi", like:23}
        ],
   
    profile: null,
    status: '',
        
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id:5,
                message: action.newPostText,
                like: 0
            };
            return{
                ...state,
                PostsData: [...state.PostsData, newPost],
                newPostText : ''
            };
        }
        
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                PostsData: state.PostsData.felter(p => p.postId !== action.postId)
            }
        }
        default:
            return state;
    }

   
}

export const addPostActionCreator = (newPostText) => {
   
    return {type: ADD_POST, newPostText}
};

export const setUserProfile = (profile) => {
    return {type:SET_USER_PROFILE, profile}
};
export const setStatus = (status) => {
    return {type:SET_STATUS, status}
};
export const deletePost = (postId) => {
    return {type:DELETE_POST, }
};
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
              
        dispatch(setUserProfile(response.data));
        
    
}    
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
    
};
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
        if(response.data.resultCode === 0){
        dispatch(setStatus(status))
        }
    
}





export default profileReducer;