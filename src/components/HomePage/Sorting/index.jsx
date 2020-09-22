import React from 'react';
import {connect} from "react-redux";
import {sortByLikes, sortByRating, resetData} from "../redux/actions";
import PropTypes from 'prop-types'
import './sorting_style.css'

const Sorting = ({sortByLikesDispatch, sortByRatingDispatch, resetDispatch}) =>{
    const sortByLikes = () => sortByLikesDispatch('likes');
    const sortByStars = () => sortByRatingDispatch('stars');

    return (
        <>
            <div className="card sorting col-12">
                <div className="card-body sort-box">
                    <h4 >Sort films by</h4>
                    <hr/>
                    <button type="button" className="btn  button-sort" onClick = {sortByLikes}>likes</button>
                    <button type="button" className="btn  button-sort" onClick = {sortByStars}>rating</button>
                    <button type="button" className="btn  button-sort" onClick = {resetDispatch}>reset</button>
                </div>
            </div>

        </>
    )
};

const mapDispatchToProps = {
    sortByLikesDispatch: (flag) => sortByLikes(flag),
    sortByRatingDispatch: (flag) => sortByRating(flag),
    resetDispatch: resetData
};

const withConnect = connect(
    null,
    mapDispatchToProps
);

export default withConnect(Sorting);

Sorting.propTypes ={
    sortByLikesDispatch: PropTypes.func.isRequired,
    sortByRatingDispatch: PropTypes.func.isRequired,
    resetDispatch: PropTypes.func.isRequired,
}
