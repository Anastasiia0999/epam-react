import React from 'react';
import {connect} from "react-redux";
import {deleteMovie} from "../redux/actions";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import Stars from '../Stars';
import './movie-box_style.css';


const MovieBox = ({movies, actors, history, match, deleteMovieDispatch}) =>{
    const openedMovieId = Number(match.params.id);
    const openedMovie = movies.find(movie => movie.id === openedMovieId);

    const movieActors = openedMovie.actorsIds.map(id => {
        const actor = actors.find(actor => actor.id === id);
        return (
            <h4 key={actor.id}><Link className='link-actor' to={`/actor/${actor.id}`}>{actor.name}</Link></h4>
        )
    });

    const handleDelete = () => {
        deleteMovieDispatch(openedMovieId);
        console.log(openedMovieId);
        history.push(`/home`);
    };

    const handleEdit = () => {
        history.push(`/edit/${openedMovieId}`);
    };

        return (
            <div className='container'>
                <div className="row">
                    <div className='card card-box col-12' >
                        <div className = 'card-header movie-box_header my-3' >
                            <h2>
                                {openedMovie.title}
                            </h2>
                        </div>
                        <div className='card-body movie-box col-12'>
                            <div className='movie-box_info'>
                                <div className='movie-box_img'>
                                    <img src={openedMovie.posterUrl} className="rounded movie-box_image" alt="poster"/>
                                </div>
                                <div className = 'movie-details ml-3'>
                                    <h5 key='1'>
                                        <b>Director:</b> {openedMovie.director}
                                    </h5>
                                    <div key='2'>
                                        <b>Actors: </b> {movieActors}
                                    </div>
                                    <h5 key='3'>
                                        <b>Genres:</b> {openedMovie.genres.join(', ')}
                                    </h5>
                                    <hr/>
                                    <h5 className='likes' key='4'>Likes {openedMovie.likes}</h5>
                                    <hr/>
                                    <Stars id = {openedMovie.id} stars={openedMovie.stars} key='star'/>
                                </div>
                            </div>
                                <p className='description' data-spy='scroll'>
                                    <b>Description:</b> {openedMovie.description}
                                </p>
                        </div>
                        <div className="buttons_movie-box">
                            <button className='btn btn-info m-3' onClick={handleEdit}>Edit Movie</button>
                            <button className='btn btn-danger m-3' onClick={handleDelete}>Delete Movie</button>
                        </div>
                    </div>
                </div>
            </div>
        )
}
const mapSateToProps = (state) => ({
    movies: state.homePageReducer.movies,
    actors: state.homePageReducer.actors
});

const mapDispatchToProps = {
    deleteMovieDispatch: (id) => deleteMovie(id)
};

const withConnect = connect(
    mapSateToProps,
    mapDispatchToProps
);

export default withConnect(MovieBox);

MovieBox.propTypes ={
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    actors: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteMovieDispatch: PropTypes.func.isRequired
}
