import React from 'react';
import {connect} from "react-redux";
import { Form, Field } from 'react-final-form'
import {changeStatus, addUser, getUsers} from '../redux/actions'
import PropTypes from 'prop-types';
import './register_style.css';
import withTranslator from "../../../withTranslator";

class Register extends React.Component{

    state = {
        isVisible: false
    };

    componentDidMount() {
        this.props.getUsersDispatch();
    }

    handleSubmit = (values) => {
        const user = this.props.users.find(user => user.name === values['login']);
        if(user){
            alert(`${this.props.fields['alert-error-login']}`)
        }else{
            if(values['login'] && values['password']){
                this.props.addUserDispatch(values['login'], values['password']);
                this.props.changeStatusDispatch();
                alert(`${this.props.fields['alert-success']}`);
                this.props.history.push('/home');
            }else{
                alert(`${this.props.fields['alert-error']}`);
            }
        }
    };

    handleCheckout = () =>{
        this.setState((state) => {
            return {isVisible: !state.isVisible};
        });
    };

    render(){
        const {fields, loadingUsers} = this.props;

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
                            <form className='col-4 my-5' onSubmit={handleSubmit}>
                                <div className="form-group-">
                                    <h4>{fields['title']}</h4>
                                    <label htmlFor="login-input">{fields['logIn-name']}</label>
                                    <Field
                                        name="login"
                                        component="input"
                                        type="text"
                                        className="form-control input-reg"
                                        id="login-input"
                                        minLength='8'
                                        aria-describedby="loginHelp"
                                        placeholder={fields['logIn-placeholder']}
                                    />
                                    <small id="loginHelp" className="form-text text-muted">{fields['muted-text']}
                                        else.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="input-password">{fields['password-name']}</label>
                                    <Field
                                        name="password"
                                        component="input"
                                        type={this.state.isVisible ? 'type': 'password'}
                                        className="form-control input-reg"
                                        id="input-password"
                                        minLength='8'
                                        placeholder={fields['password-placeholder']}
                                    />
                                </div>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="exampleCheck1"
                                        onChange = {this.handleCheckout}
                                    />
                                    <label className="form-check-label" htmlFor="exampleCheck1" >{fields['check-box']}</label>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary register my-3">{fields['register-btn']}</button>
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
    addUserDispatch: addUser,
    getUsersDispatch: getUsers
};

const mapSateToProps = (state) => ({
    users: state.userReducer.users,
    loadingUsers: state.userReducer.loadingUsers
});

const withConnect = connect(
    mapSateToProps,
    mapDispatchToProps
);

export default withConnect(withTranslator(Register, "register-form"));

Register.propTypes ={
    users: PropTypes.arrayOf(PropTypes.object),
    loadingUsers: PropTypes.bool,
    changeStatusDispatch: PropTypes.func.isRequired,
    addUserDispatch: PropTypes.func.isRequired,
    getUsersDispatch: PropTypes.func.isRequired,
}
