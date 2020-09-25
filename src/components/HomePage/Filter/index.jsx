import React from 'react';
import {connect} from "react-redux";
import {filterByName} from "../redux/actions";
import PropTypes from 'prop-types';
import './filter_style.css';


const Filter  = ({filterByNameDispatch}) =>{
    const filter = (event) => filterByNameDispatch(event.target.value);
        return (
                <div className="md-form col-12 search-field">
                    <input className="form-control col-5 search-input my-2"
                           type="text"
                           placeholder="Search by name"
                           aria-label="Search"
                           onChange={filter}>
                    </input>
                </div>
        )
};

const mapDispatchToProps = {
    filterByNameDispatch: filterByName
};

const withConnect = connect(
    null,
    mapDispatchToProps
);

export default withConnect(Filter);

Filter.propTypes ={
    filterByNameDispatch: PropTypes.func.isRequired
}
