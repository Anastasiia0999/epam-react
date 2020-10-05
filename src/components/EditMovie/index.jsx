import React from 'react';
import { Form, Field } from 'react-final-form'
import {connect} from "react-redux";
import withTranslator from "../../withTranslator";
import {editMovie} from "./redux/actions";
import PropTypes from 'prop-types';
import './edit-movie_style.css';


export const EditMovie = ({movies, match, history, editMovieDispatch, fields}) =>{
    const openedMovieId = Number(match.params.id);

    const openedMovie = movies.find(movie => movie.id === openedMovieId);

    const handleSubmit = (values) => {
        editMovieDispatch(openedMovie, values, history.push);
    }

    const handleCancel = () => {
        history.push(`/movie/${openedMovieId}`);
    };

    return (
        <div className='container'>
            <div className="row">
                <Form
                    onSubmit={handleSubmit}
                    render={({ handleSubmit }) => (
                        <form className="px-2 py-2 add-post-form col-7" onSubmit={handleSubmit}>
                            <h3 className='col-12 my-3'>{fields['title']}: {openedMovie.title}</h3>
                            <div className="row mb-4 col-12">
                                <div className="col d-flex align-items-center">
                                    <label className="mr-3 w-25" htmlFor="title">{fields['title-label']}</label>
                                    <Field
                                        name="title"
                                        component="input"
                                        className="form-control input"
                                        type="text" id="title"
                                        placeholder={fields['title-placeholder']}
                                        maxLength="20" minLength="2"
                                    />
                                </div>
                            </div>

                            <div className="row mb-4 col-12">
                                <div className="col d-flex align-items-center">
                                    <label className="mr-3 w-25 label" htmlFor="posterUrl">{fields['poster-label']}</label>
                                    <Field
                                        name="posterUrl"
                                        component="input"
                                        className="form-control input"
                                        type="text"
                                        id="posterUrl"
                                        placeholder={fields['poster-placeholder']}
                                    />
                                </div>
                            </div>

                            <div className="row mb-4 col-12">
                                <div className="col d-flex align-items-center">
                                    <label className="mr-3 w-25 label" htmlFor="director">{fields['director-label']}</label>
                                    <Field
                                        name="director"
                                        component="input"
                                        className="form-control input"
                                        type="text"
                                        id="director"
                                        placeholder={fields['director-placeholder']}
                                        maxLength="20"
                                        minLength="2"
                                    />
                                </div>
                            </div>

                            <div className="row mb-4 col-12">
                                <div className="col d-flex align-items-center">
                                    <label className="mr-3 w-25 label" htmlFor="genres">{fields['genres-label']}</label>
                                    <Field
                                        name="genres"
                                        component="input"
                                        className="form-control input"
                                        type="text"
                                        id="genres"
                                        placeholder={fields['genres-placeholder']}
                                        maxLength="50"
                                        minLength="2"
                                    />
                                </div>
                            </div>

                            <div className="row mb-4 col-12">
                                <div className="col d-flex align-items-center">
                                    <label className="mr-3 w-25 label" htmlFor="post">{fields['desc-label']}</label>
                                    <Field
                                        name="description"
                                        component="textarea"
                                        className="form-control textarea "
                                        type="text"
                                        id="description"
                                        placeholder={fields['desc-placeholder']}
                                        rows="10"
                                        cols="20"
                                        maxLength="1000"
                                        minLength="5"
                                    />
                                </div>
                            </div>

                            <div className="row buttons col-12">
                                <button type='submit' className='btn btn-info'>{fields['submit-btn']}</button>
                                <button
                                    type='button'
                                    className="btn btn-dark"
                                    name = 'cancel'
                                    onClick = {handleCancel}>
                                    {fields['cancel-btn']}
                                </button>
                            </div>

                        </form>
                    )}
                />
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

export default withConnect(withTranslator(EditMovie, "edit-form"));

EditMovie.propTypes ={
    movies: PropTypes.arrayOf(PropTypes.object),
    editMovieDispatch: PropTypes.func
}
