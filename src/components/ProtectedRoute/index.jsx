import React from 'react';
import {Redirect, Route} from 'react-router-dom';

import {connect} from "react-redux";

const ProtectedRoute = (props) => (
    props.logStatus ? <Route {...props} /> : <Redirect to='/login' />
);

const mapSateToProps = (state) => ({
    logStatus: state.userReducer.logStatus,
});

const withConnect = connect(
    mapSateToProps,
    null
);

export default withConnect(ProtectedRoute);
