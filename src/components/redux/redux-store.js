import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer'
import dialogReducer from './dialog-reducer'
import sidebarReducer from './sidebar-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import  thunkMiddleware from 'redux-thunk';
import formsReducer from "redux-forms/lib/reducer"; //75
import form from 'redux-forms' //75
import appReducer from './app-reducer';





let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    formsReducer:formsReducer, //75
     //75
    app: appReducer //80
  
})





let store = createStore (reducers, applyMiddleware (thunkMiddleware));

window.store = store;


export default store;