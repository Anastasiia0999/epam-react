import React from 'react';
import {connect} from "react-redux";
import {changeStatus} from "../redux/actions";
import PropTypes from 'prop-types';
import './register_style.css';

const Register = ({history, changeStatusDispatch}) =>{

    let password = '';
    let login = '';
    let passwordInput = null;
    let checkOutFlag = true;

    const handleAddUser= () => {
        if(login && password){
            localStorage.setItem(`${login}`, password);
            changeStatusDispatch();
            history.push('/home');
        }else{
            alert('Incorrect data');
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
                    <div className="form-group-">
                        <h4>Registration</h4>
                        <label htmlFor="login-input">Login</label>
                        <input type="email" className="form-control input-reg" id="login-input" minLength='8'  aria-describedby="loginHelp"
                               placeholder="Enter login" onChange={handleLoginChange}/>
                        <small id="loginHelp" className="form-text text-muted">We'll never share your login with anyone
                            else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-password">Password</label>
                        <input type="password" className="form-control input-reg" id="input-password" minLength='8' placeholder="Password" onChange={handlePasswordChange}/>
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
    changeStatusDispatch: () => changeStatus()
};

const withConnect = connect(
    null,
    mapDispatchToProps
);

export default withConnect(Register);

Register.propTypes ={
    changeStatusDispatch: PropTypes.func.isRequired
}
