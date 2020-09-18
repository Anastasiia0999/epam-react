import React from 'react';
import PropTypes from 'prop-types'
import './filter_style.css'

import {connect} from "react-redux";
import {filterByName} from "../redux/actions";

const Filter  = ({filterByNameDispatch}) =>{
        return (
                <div className="md-form col-12 search-field">
                    <input className="form-control col-5 search-input" type="text" placeholder="Search by name" aria-label="Search" onChange={filterByNameDispatch}>
                    </input>
                </div>
        )
}

const mapDispatchToProps = {
    filterByNameDispatch: (event) => filterByName(event.target.value)
}

const withConnect = connect(
    null,
    mapDispatchToProps
);

export default withConnect(Filter);

Filter.propTypes ={
    filterByNameDispatch: PropTypes.func.isRequired
}
