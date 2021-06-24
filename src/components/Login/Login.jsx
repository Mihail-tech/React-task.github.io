import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { reduxForm, Field }  from 'redux-forms/lib/reducer'
import { required } from '../../helper/validator/validators';
import { Input } from '../common/Preloader/FormsControls/FormsControls';
import login from '../redux/auth-reducer'
import classes from '../common/Preloader/FormsControls/FormsControls.module.css'
//import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit} >
                <div>
                    <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]} />
                </div>
                <div>
                    <Field placeholder={'password'} name={'password'} component={Input} validate={[required]} type={'password'}/>
                </div>
                <div>
                    <Field type={'checkbox'} name={'remember'} component={Input} /> remember
                </div>
                {props.error && <div className={classes.formSummaryError} >
                    {props.error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}


const LoginReduxFrom = reduxForm({
    // a unique name for the form
    formsReducer: 'login'
  })(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.remember)
    }

    if(props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>
                Login
            </h1>
            <LoginReduxFrom onSubmit={onSubmit} />
        </div>
    )
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login) ;