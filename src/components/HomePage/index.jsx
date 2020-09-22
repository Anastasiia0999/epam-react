import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Movie from './Movie';
import Filter from "./Filter";
import Sorting from "./Sorting";
import './home-page_style.css'

const HomePage  = ({movies, searchMovieName}) =>{
    const searchResult = movies.filter(movie => movie.title.toUpperCase().includes(searchMovieName.toUpperCase()));
    return (
        <div className = 'container'>
            <div className='row'>
                <div className="card card-movie col-12">
                    <div className="card card-movie">
                        <div className="card-header main-header ">
                            Movies
                        </div>
                    </div>
                    <Sorting/>
                    <Filter/>
                    <div className = 'movies-list col-12'>
                        {
                            searchResult.map(movie =>
                                <Movie key = { movie.id } {...movie} />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapSateToProps = (state) => ({
    movies: state.homePageReducer.movies,
    searchMovieName: state.homePageReducer.searchMovieName
});

const withConnect = connect(
    mapSateToProps,
    null
);

export default withConnect(HomePage);

HomePage.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    searchMovieName: PropTypes.string.isRequired
}
