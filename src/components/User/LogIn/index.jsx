import React, {Component} from 'react';
import { useState } from 'react';
import {connect} from "react-redux";
import {changeStatus, getUsers} from "../redux/actions";
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';
import './log-in_style.css';

class LogIn extends Component{

    login = '';
    password = '';

    state = {
        isVisible: false
    };

    componentDidMount() {
        this.props.getUsersDispatch();
    }

    handleSubmit = () => {
        const user = this.props.users.find(user => user.name === this.login);
        if( user &&  user.password === this.password){
            this.props.changeStatusDispatch();
            alert('Successful pass');
            this.props.history.push(`/home`);
        }else{
            alert('Incorrect login/password');
        }
    };

    handlePasswordChange = (ev) => {
        ev.preventDefault();
        this.password = ev.target.value;
    };

    handleLoginChange = (ev) => {
        ev.preventDefault();
        this.login = ev.target.value;
    };

    render() {

        const {loadingUsers} = this.props;

        const handleCheckout = () =>{
            this.setState((state) => {
                return {isVisible: !state.isVisible};
            });
        };

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
                    <form className='col-4 my-5'>
                        <div className="form-group">
                            <label htmlFor="login-input main">Login</label>
                            <input type="text" className="form-control text-input" id="login-input" minLength='8' aria-describedby="loginHelp"
                                   placeholder="Enter login" onChange={this.handleLoginChange}/>
                            <small id="loginHelp" className="form-text text-muted">We'll never share your login with anyone
                                else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="input-password main">Password</label>
                            <input type={this.state.isVisible ? 'type': 'password'}
                                   className="form-control text-input"
                                   id="input-password"
                                   minLength='8'
                                   placeholder="Password"
                                   onChange={this.handlePasswordChange}/>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input " id="exampleCheck1" onChange = {handleCheckout}/>
                            <label className="form-check-label" htmlFor="exampleCheck1" >Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary my-3" onClick={this.handleSubmit}>Login</button>
                        <h6>
                            Don`t have an account?
                            <NavLink to='/register'> Go to register page</NavLink>
                        </h6>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps ={
    changeStatusDispatch: changeStatus,
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

export default withConnect(LogIn);

LogIn.propTypes ={
    users: PropTypes.arrayOf(PropTypes.object),
    loadingUsers: PropTypes.bool,
    changeStatusDispatch: PropTypes.func.isRequired,
    getUsersDispatch: PropTypes.func.isRequired,
}
