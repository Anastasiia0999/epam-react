import React from 'react';
import PropTypes from 'prop-types'
import './sorting_style.css'

import {sortByLikes, sortByRating, resetData} from "../redux/actions";
import {connect} from "react-redux";

const Sorting = ({sortByLikesDispatch, sortByRatingDispatch, resetDispatch}) =>{
    return (
        <>
            <div className="card sorting col-12">
                <div className="card-body sort-box">
                    <h4 >Sort films by</h4>
                    <hr/>
                    <button type="button" className="btn  button-sort" onClick = {sortByLikesDispatch}>likes</button>
                    <button type="button" className="btn  button-sort" onClick = {sortByRatingDispatch}>rating</button>
                    <button type="button" className="btn  button-sort" onClick = {resetDispatch}>reset</button>
                </div>
            </div>

        </>
    )
}

const mapDispatchToProps = {
    sortByLikesDispatch: sortByLikes,
    sortByRatingDispatch: sortByRating,
    resetDispatch: resetData
}

const withConnect = connect(
    null,
    mapDispatchToProps
);

export default withConnect(Sorting);

Sorting.propTypes ={
    sortByLikesDispatch: PropTypes.func.isRequired,
    sortByLikesRating: PropTypes.func.isRequired,
    resetDispatch: PropTypes.func.isRequired,
}
