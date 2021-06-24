import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem"
import DialogMessage from "./DialogMessage";
import { sendMessageCreator, updateNewMessageBodyCreator } from '../redux/dialog-reducer';
import { reduxForm, Field }  from 'redux-forms/lib/reducer'
import { Textarea } from '../common/Preloader/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../helper/validator/validators';




const Dialogs = (props) => {
    let state = props.dialogPage;

    let DialogsElement = state.DialogsData.map((dialog) => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);

    let MessangesElement = state.MessageData.map(messange => <DialogMessage key={messange.id} messange={messange.messange}/>)

    let newMessageBody = state.newMessageBody;



    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if(!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {DialogsElement}
            </div>
            <div className={classes.messanges}>
                <div> {MessangesElement} </div>
                <addMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

let maxLength = maxLengthCreator(100);

const addMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div> 
                <Field component={Textarea} validate={[required,maxLength]} name='newMessageBody' placeholder='write text' />
            </div>
            <div> <button >click</button>  </div>
        </form>
    )
}


export const addMessageFormRedux = reduxForm ({
    
    formsReducer: 'dialogAddMessageForm'
  })(addMessageForm)


export default Dialogs;

