import React from 'react';
import withTranslator from "../../withTranslator";
import {connect} from "react-redux";
import {changeStatus} from "../User/redux/actions";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import './header_style.css';
import {changeLanguage} from "./redux/actions";

class Header extends React.Component{
    handleLogOut = () =>{
        this.props.changeStatusDispatch();
    }

    handleLangChange = () =>{
        this.props.changeLanguageDispatch();
    }

    render(){
        const {logStatus, fields, englishOn} = this.props;
        return (
            <div className='container'>
                <div className="row">
                    <ul className='card-header header-main col-12 my-3'>
                        {logStatus ?  <li className = 'link-text' onClick={this.handleLogOut}>{fields['logOut-btn']}</li> : <li><Link className = 'link-text' to='/login'><h6 className='link-text'>{fields['logIn-btn']}</h6></Link></li>}
                        <li className="li-lang" onClick = {this.handleLangChange}>Switch to {englishOn ?  'Eng' : 'Ukr'}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapSateToProps = (state) => ({
    logStatus: state.userReducer.logStatus,
    englishOn: state.headerReducer.englishOn,
});

const mapDispatchToProps ={
    changeStatusDispatch: changeStatus,
    changeLanguageDispatch: changeLanguage
};

const withConnect = connect(
        mapSateToProps,
        mapDispatchToProps
);

export default withConnect(withTranslator(Header, "header"));

Header.propTypes ={
    logStatus: PropTypes.bool,
    englishOn: PropTypes.bool,
    changeStatusDispatch: PropTypes.func.isRequired,
    changeLanguageDispatch: PropTypes.func.isRequired,
}

