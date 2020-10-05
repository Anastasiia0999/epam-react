import React from 'react';
import {Redirect, Route, BrowserRouter} from 'react-router-dom';

import {connect} from "react-redux";

export const ProtectedRoute = (props) => {
    return (
        <div>
        {props.logStatus ? <BrowserRouter><Route {...props} /></BrowserRouter>  : <BrowserRouter><Redirect to='/login'/></BrowserRouter>}
        </div>
    );
};

const mapSateToProps = (state) => ({
    logStatus: state.userReducer.logStatus,
});

const withConnect = connect(
    mapSateToProps,
    null
);

export default withConnect(ProtectedRoute);
