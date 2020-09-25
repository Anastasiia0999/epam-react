import React from 'react';
import {connect} from "react-redux";
import {changeStatus} from "../User/redux/actions";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import './header_style.css';

const Header  = ({logStatus, changeStatusDispatch}) =>{
    const handleLogOut = () =>{
        changeStatusDispatch();
    }
    return (
        <div className='container'>
            <div className="row">
                <ul className='card-header header-main col-12 my-3'>
                    {logStatus ?  <li className = 'link-text' onClick={handleLogOut}>Log Out</li> : <li><Link className = 'link-text' to='/login'><h6 className='link-text'>Log In</h6></Link></li>}
                </ul>
            </div>
        </div>
    )
};

const mapSateToProps = (state) => ({
    logStatus: state.userReducer.logStatus
});

const mapDispatchToProps ={
    changeStatusDispatch: changeStatus
};

const withConnect = connect(
    mapSateToProps,
    mapDispatchToProps
);

export default withConnect(Header);

Header.propTypes ={
    logStatus: PropTypes.bool,
    changeStatusDispatch: PropTypes.func.isRequired
}

