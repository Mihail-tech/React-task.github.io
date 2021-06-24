import React from 'react';
import classes from './FormsControls.module.css'







export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={classes.formControl + '' + (hasError ?  classes.error : "")} >
            <textarea {...input} {...props} />

        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={classes.formControl + '' + (hasError ?  classes.error : "")} >
            <input {...input} {...props} />

        </div>
    )
}