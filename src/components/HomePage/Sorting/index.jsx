import React from 'react';
import {connect} from "react-redux";
import {sortByLikes, sortByRating, resetData} from "../redux/actions";
import PropTypes from 'prop-types'
import './sorting_style.css'
import withTranslator from "../../../withTranslator";

const Sorting = ({sortByLikesDispatch, sortByRatingDispatch, resetDispatch, fields}) =>{
    const sortByLikes = () => sortByLikesDispatch('likes');
    const sortByStars = () => sortByRatingDispatch('stars');

    return (
        <>
            <div className="card sorting col-12">
                <div className="card-body sort-box">
                    <h4 >{fields['sorting-title']}</h4>
                    <hr/>
                    <button type="button" className="btn  button-sort" onClick = {sortByLikes}>{fields['likes-btn']}</button>
                    <button type="button" className="btn  button-sort" onClick = {sortByStars}>{fields['stars-btn']}</button>
                    <button type="button" className="btn  button-sort" onClick = {resetDispatch}>{fields['reset-btn']}</button>
                </div>
            </div>

        </>
    )
};

const mapDispatchToProps = {
    sortByLikesDispatch: sortByLikes,
    sortByRatingDispatch: sortByRating,
    resetDispatch: resetData
};

const withConnect = connect(
    null,
    mapDispatchToProps
);

export default withConnect(withTranslator(Sorting, "sorting"));

Sorting.propTypes ={
    sortByLikesDispatch: PropTypes.func.isRequired,
    sortByRatingDispatch: PropTypes.func.isRequired,
    resetDispatch: PropTypes.func.isRequired,
}
