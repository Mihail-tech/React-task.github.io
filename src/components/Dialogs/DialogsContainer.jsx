import React from 'react';

import { sendMessageCreator, updateNewMessageBodyCreator } from '../redux/dialog-reducer';

import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';





let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) =>  {dispatch(sendMessageCreator(newMessageBody))}
    }
}




export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,

)(Dialogs);

