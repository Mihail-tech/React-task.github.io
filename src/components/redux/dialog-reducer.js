
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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

}

const dialogReducer = ( state = initialState, action) => {

    
    switch(action.type) {
       
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                MessageData: [...state.MessageData, {id:6, messange: body}]
            };
        default:
            return state;

    }

}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})




export default dialogReducer;