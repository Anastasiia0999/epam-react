import React, {useState} from 'react';
import {connect} from "react-redux";
import {changeStatus, addUser} from '../redux/actions'
import PropTypes from 'prop-types';
import './register_style.css';

const Register = ({history, changeStatusDispatch, addUserDispatch}) =>{

    let password = '';
    let login = '';
     const [isVisible, setIsVisible] = useState(false);

    const handleAddUser = () => {
        if(login && password){
            addUserDispatch(login, password);
            changeStatusDispatch();
            alert('You were successfully registered');
            history.push('/home');
        }else{
            alert('Incorrect data');
        }
    };

    const handlePasswordChange = (ev) => {
        ev.preventDefault();
        password = ev.target.value;
    };

    const handleLoginChange = (ev) => {
        ev.preventDefault();
        login = ev.target.value;
    };

    const handleCheckout = () =>{
        setIsVisible(!isVisible);
    };

    return (
        <div className='container'>
            <div className="row">
                <form className='col-4 my-5'>
                    <div className="form-group-">
                        <h4>Registration</h4>
                        <label htmlFor="login-input">Login</label>
                        <input type="email"
                               className="form-control input-reg"
                               id="login-input"
                               minLength='8'
                               aria-describedby="loginHelp"
                               placeholder="Enter login"
                               onChange={handleLoginChange}/>
                        <small id="loginHelp" className="form-text text-muted">We'll never share your login with anyone
                            else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-password">Password</label>
                        <input type={isVisible ? 'type': 'password'}
                               className="form-control input-reg"
                               id="input-password"
                               minLength='8'
                               placeholder="Password"
                               onChange={handlePasswordChange}/>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange = {handleCheckout}/>
                        <label className="form-check-label" htmlFor="exampleCheck1" >Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary my-3" onClick={handleAddUser}>Register</button>
                </form>
            </div>
        </div>
    )
};

const mapDispatchToProps ={
    changeStatusDispatch: changeStatus,
    addUserDispatch: addUser
};

const withConnect = connect(
    null,
    mapDispatchToProps
);

export default withConnect(Register);

Register.propTypes ={
    changeStatusDispatch: PropTypes.func.isRequired,
    addUserDispatch: PropTypes.func.isRequired
}