import { authAPI } from "../../api/api";
import {stopSubmit} from 'redux-forms/lib/reducer'

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA';


let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_AUTH_USER_DATA:
            return {
                ...state, 
                ...action.payload,
                  
            }

    default:
        return
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => 
    ({type: SET_AUTH_USER_DATA, payload:{userId, email, login, isAuth}});

export const getAuthUserData = () => async (dispatch) => {
   let response = await authAPI .me()
   
        if(response.data.resultCode === 0){
            let {id, email, login} = response.data.data;
          dispatch(setAuthUserData(id, email, login, true));
        }
      
}

export const login = (email, password, remember) => async (dispatch) => {
   
        
    let response = await authAPI .login(email, password, remember);

        if(response.data.resultCode === 0){
           dispatch(getAuthUserData())
        } else {
            let messege = response.data.messages.length > 0 ? response.data.messages[0] : "error";
            dispatch(stopSubmit('login', {_error: 'Common error'}));
        }
            
     
}

export const logout = () => async (dispatch) => {
    let response = await authAPI .logout()
        if(response.data.resultCode === 0){
            dispatch(setAuthUserData(null, null, null, false));
         }
      
}

export default authReducer;