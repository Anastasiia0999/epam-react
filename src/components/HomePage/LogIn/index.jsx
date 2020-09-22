import React from 'react';
import {connect} from "react-redux";
import {changeStatus} from "../redux/actions";
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';
import './log-in_style.css';

const LogIn = ({history,changeStatusDispatch}) =>{
    let password = '';
    let login = '';
    let passwordInput = null;
    let checkOutFlag = true;

    const handleSubmit = () => {
        if(localStorage[login] && localStorage[login] === password){
            changeStatusDispatch();
            alert('Successful pass');
            history.push(`/home`);
        }else{
            alert('Incorrect login/password');
        }
    };

    const handlePasswordChange = (ev) => {
        ev.preventDefault();
        password = ev.target.value;
        passwordInput = ev.target;
    };

    const handleLoginChange = (ev) => {
        ev.preventDefault();
        login = ev.target.value;
    };

    const handleCheckout = () =>{
        if(checkOutFlag){
            checkOutFlag = !checkOutFlag;
            passwordInput.type = 'text';
        }else{
            checkOutFlag = !checkOutFlag;
            passwordInput.type = 'password';
        }
    };

    return (
        <div className='container'>
            <div className="row">
                <form className='col-4 my-5'>
                    <div className="form-group">
                        <label htmlFor="login-input main">Login</label>
                        <input type="text" className="form-control text-input" id="login-input" minLength='8' aria-describedby="loginHelp"
                               placeholder="Enter login" onChange={handleLoginChange}/>
                        <small id="loginHelp" className="form-text text-muted">We'll never share your login with anyone
                            else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-password main">Password</label>
                        <input type="password" className="form-control text-input" id="input-password" minLength='8' placeholder="Password" onChange={handlePasswordChange}/>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input " id="exampleCheck1" onChange = {handleCheckout}/>
                        <label className="form-check-label" htmlFor="exampleCheck1" >Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary my-3" onClick={handleSubmit}>Login</button>
                    <h6>
                        Don`t have an account?
                        <NavLink to='/register'> Go to register page</NavLink>
                    </h6>
                </form>
            </div>
        </div>
    )
};

const mapDispatchToProps ={
    changeStatusDispatch: () => changeStatus()
};

const withConnect = connect(
    null,
    mapDispatchToProps
);

export default withConnect(LogIn);

LogIn.propTypes ={
    changeStatusDispatch: PropTypes.func.isRequired
}
