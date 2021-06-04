import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem"
import DialogMessage from "./DialogMessage";



const Dialogs = (props) => {

    let DialogsData =[
        {id:1, name:"Mike"},
        {id:2, name:"Vlad"},
        {id:3, name:"Petr"},
        {id:4, name:"Nastya"},
        {id:5, name:"Artem"}
        
    ];

    let DialogsElement = DialogsData.map( dialog =>  <DialogItem name={dialog.name} id={dialog.id} />)

    let MessageData = [
        {id:1, messange:"hi"},
        {id:2, messange:"hi"},
        {id:3, messange:"hi"},
        {id:4, messange:"hi"},
        {id:5, messange:"hi"}
    ]

    let MessangesElement = MessageData.map(messange => <DialogMessage messange={messange.messange}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {DialogsElement}
            </div>
            <div className={classes.messanges}>
                {MessangesElement}
            </div>
        </div>
    )
}

export default Dialogs;

