import React from 'react';
import PropTypes from 'prop-types'
import Movie from './Movie'
import MovieBox from "./MovieBox";
import Filter from "./Filter";
import Sorting from "./Sorting";
import Info from "./Info";
import './home-page_style.css'

import {connect} from "react-redux";

const HomePage  = ({movies, searchMovieName, openedMovieId}) =>{

         const openedMovie = movies.find(movie => movie.id === openedMovieId);
         const searchResult = movies.filter(movie => movie.title.toUpperCase().includes(searchMovieName.toUpperCase()));

        return (
                <div className = 'container'>
                    <div className='row'>
                        <div className="card card-movie col-7">
                            <div className="card-header main-header ">
                                <h3>Movies</h3>
                            </div>
                        </div>
                        <div className='movie-box col-4 position-fixed '>
                            {
                                openedMovieId ? <MovieBox {...openedMovie}/> : <Info />
                            }
                        </div>

                        <div className = 'movies-list col-7'>
                            <Sorting/>
                            <Filter/>
                            {
                                searchResult.map(movie =>
                                    <Movie key = { movie.id } {...movie} />
                                )
                            }
                        </div>

                    </div>
                </div>
        )

}

const mapSateToProps = (state) => ({
    movies: state.homePageReducer.movies,
    searchMovieName: state.homePageReducer.searchMovieName,
    openedMovieId: state.homePageReducer.openedMovieId
});

const withConnect = connect(
    mapSateToProps,
    null
);

export default withConnect(HomePage);

HomePage.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    searchMovieName: PropTypes.string.isRequired,
    openedMovieId: PropTypes.number.isRequired
}
