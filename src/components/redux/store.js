
import dialogReducer from './dialog-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';




let store = {
    _state : {
        profilePage: {
            PostsData:[
                {id:1, messange:"hi", like:12},
                {id:2, messange:"hi", like:23}
            ],
            newPostText : "what happen?"
        },
        dialogPage: {
            DialogsData:[
                {id:1, name:"Mike"},
                {id:2, name:"Vlad"},
                {id:3, name:"Petr"},
                {id:4, name:"Nastya"},
                {id:5, name:"Artem"}
                
            ],
            MessageData:[
                {id:1, messange:"hi"},
                {id:2, messange:"hi"},
                {id:3, messange:"hi"},
                {id:4, messange:"hi"},
                {id:5, messange:"hi"}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    getState () {
        return this._state;
    },
    _callSubscriber() {
        console.log('state is changed')
    },
    
     subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){
        
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        

        this._callSubscriber(this._state);

    },
  
    
}







export default store;