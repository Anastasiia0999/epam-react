import React from 'react';
import {connect} from "react-redux";
import {editMovie} from "./redux/actions";
import PropTypes from 'prop-types';
import './edit-movie_style.css';

const movieEdit = {
    title: '',
    director: '',
    genres: '',
    description: '',
    posterUrl: ''
};

const EditMovie = ({movies, match, history, editMovieDispatch}) =>{
    const openedMovieId = Number(match.params.id);

    const openedMovie = movies.find(movie => movie.id === openedMovieId);

    const handleSubmit = () => {
        editMovieDispatch(openedMovie, movieEdit, history.push);
    }

    const handleChange = (ev) =>{
        movieEdit[ev.target.id] = ev.target.value;
    }

    const handleCancel = () => {
        history.push(`/movie/${openedMovieId}`);
    };

    return (
        <div className='container'>
            <div className="row">
                <form className="px-2 py-2 add-post-form col-7" >

                    <h3 className='col-12 my-3'>Edit Movie: {openedMovie.title}</h3>
                    <div className="row mb-4 col-12">
                        <div className="col d-flex align-items-center">
                            <label className="mr-3 w-25" htmlFor="title">Title</label>
                            <input className="form-control input" type="text" id="title"
                                   placeholder="Change title" maxLength="20" minLength="2" onChange = {handleChange}/>
                        </div>
                    </div>

                    <div className="row mb-4 col-12">
                        <div className="col d-flex align-items-center">
                            <label className="mr-3 w-25 label" htmlFor="posterUrl">Poster(url)</label>
                            <input className="form-control input" type="text" id="posterUrl"
                                   placeholder="Change poster" onChange = {handleChange}/>
                        </div>
                    </div>

                    <div className="row mb-4 col-12">
                        <div className="col d-flex align-items-center">
                            <label className="mr-3 w-25 label" htmlFor="director">Director</label>
                            <input className="form-control input" type="text" id="director"
                                   placeholder="Change director" maxLength="20" minLength="2" onChange = {handleChange}/>
                        </div>
                    </div>

                    <div className="row mb-4 col-12">
                        <div className="col d-flex align-items-center">
                            <label className="mr-3 w-25 label" htmlFor="genres">Genres</label>
                            <input className="form-control input" type="text"  id="genres"
                                   placeholder="Change genres" maxLength="50" minLength="2" onChange = {handleChange}/>
                        </div>
                    </div>

                    <div className="row mb-4 col-12">
                        <div className="col d-flex align-items-center">
                            <label className="mr-3 w-25 label" htmlFor="post">Description</label>
                            <textarea className="form-control textarea " type="text" id="description"
                                      placeholder="Change description" rows="10" cols="20" maxLength="1000" minLength="5" onChange = {handleChange}/>
                        </div>
                    </div>

                    <div className="row buttons col-12">
                        <button type='button' className='btn btn-info' onClick = {handleSubmit}>Submit</button>
                        <button type='button' className="btn btn-dark" name = 'cancel' onClick = {handleCancel}>Cancel</button>
                    </div>

                </form>
            </div>
        </div>
    )
};

const mapSateToProps = (state) => ({
    movies: state.homePageReducer.movies
});

const mapDispatchToProps ={
    editMovieDispatch: editMovie
};

const withConnect = connect(
    mapSateToProps,
    mapDispatchToProps
);

export default withConnect(EditMovie);

EditMovie.propTypes ={
    movies: PropTypes.arrayOf(PropTypes.object),
    editMovieDispatch: PropTypes.func.isRequired
}
