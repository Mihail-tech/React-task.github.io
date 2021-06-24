import { authAPI } from "../../api/api";
import {stopSubmit} from 'redux-forms/lib/reducer'
import {getAuthUserData} from './auth-reducer'

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
   initialized: false,
   
}

const appReducer = (state = initialState, action) => {
    switch(action.type){
        case INITIALIZED_SUCCESS:
            return {
                ...state, 
                initialized: true,
                  
            }

    default:
        return
    }
}

export const setInitialisedSuccess = () => 
    ({type: INITIALIZED_SUCCESS});

export const initialiseApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
   
    Promise.all([promise]).then(() => {
        dispatch(setInitialisedSuccess())
    })
    
}

export const login = (email, password, remember) => (dispatch) => {
   
        
    authAPI .login(email, password, remember).then(response => {
        if(response.data.resultCode === 0){
           dispatch(getAuthUserData())
        } else {
            let messege = response.data.messages.length > 0 ? response.data.messages[0] : "error";
            dispatch(stopSubmit('login', {_error: 'Common error'}));
        }
            
      });
}



export default appReducer;