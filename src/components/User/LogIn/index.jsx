import React, {Component} from 'react';
import { Form, Field } from 'react-final-form';
import {connect} from 'react-redux';
import {changeStatus, getUsers} from "../redux/actions";
import {Link, BrowserRouter} from "react-router-dom";
import PropTypes from 'prop-types';
import './log-in_style.css';
import withTranslator from "../../../withTranslator";

export class LogIn extends Component{

    state = {
        isVisible: false
    };

    componentDidMount = () => {
        this.props.getUsersDispatch();
    }

    handleSubmit = (values) => {
        const user = this.props.users.find(user => user.name === values['login']);
        if( user &&  user.password === values['password']){
            this.props.changeStatusDispatch();
            alert(`${this.props.fields['alert-success']}`);
            this.props.history.push(`/home`);
        }else{
            alert(`${this.props.fields['alert-error']}`);
        }
    };

    handleCheckout = () =>{
        this.setState((state) => {
            return {isVisible: !state.isVisible};
        });
    };


    render() {

        const {loadingUsers, fields} = this.props;

        if(loadingUsers){
            return (
                <div className = 'container'>
                    <div className='row'>
                        <h1>loading</h1>
                    </div>
                </div>
            )
        }

        return (
            <div className='container'>
                <div className="row">
                    <Form
                        onSubmit={this.handleSubmit}
                        render={({ handleSubmit }) => (
                        <form className='col-4 my-5 login-form' id="login-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="login-input main" id="login-label">{fields['logIn-name']} </label>
                                <Field
                                    name="login"
                                    component="input"
                                    type="text"
                                    className="form-control text-input"
                                    id="login-input"
                                    minLength='8'
                                    aria-describedby="loginHelp"
                                    placeholder={fields['logIn-placeholder']}
                                />
                                <small id="loginHelp" className="form-text text-muted">{fields['muted-text']}</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="input-password main">{fields['password-name']}</label>
                                <Field
                                    name="password"
                                    component="input"
                                    type={this.state.isVisible ? 'type': 'password'}
                                    className="form-control text-input"
                                    id="input-password"
                                    placeholder={fields['password-placeholder']}
                                />
                            </div>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input "
                                    id="exampleCheck1"
                                    onChange = {this.handleCheckout}/>
                                <label className="form-check-label" htmlFor="exampleCheck1" >{fields['check-box']}</label>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary my-3"
                                id="btn-submit">{fields['logIn-btn']}</button>
                            <h6>
                                {fields['help-text']}
                                <BrowserRouter>
                                    <Link to='/register'> {fields['link-text']}</Link>
                                </BrowserRouter>
                            </h6>
                        </form>
                        )}
                    />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps ={
    changeStatusDispatch: changeStatus,
    getUsersDispatch:getUsers
};

const mapSateToProps = (state) => ({
    users: state.userReducer.users,
    loadingUsers: state.userReducer.loadingUsers
});

const withConnect = connect(
    mapSateToProps,
    mapDispatchToProps
);

export default withConnect(withTranslator(LogIn, "logIn-form"));

LogIn.propTypes ={
    users: PropTypes.arrayOf(PropTypes.object),
    loadingUsers: PropTypes.bool,
    changeStatusDispatch: PropTypes.func,
    getUsersDispatch: PropTypes.func,
}
