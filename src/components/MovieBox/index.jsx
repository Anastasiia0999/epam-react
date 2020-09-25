import React, {Component} from 'react';
import {connect} from "react-redux";
import {getMovieById, getActors, deleteMovie} from "./redux/actions";
import PropTypes from "prop-types";
import Stars from '../Stars';
import './movie-box_style.css';
import {Link} from "react-router-dom";


class MovieBox extends Component{

    componentDidMount() {
        this.props.getMovieDispatch(Number(this.props.match.params.id));
        this.props.getActorsDispatch();
    }

    setActors = (openedM, act) =>{
        const movieActors = openedM.actorsIds.map(id => {
            const actor = act.find(actor => actor.id === id);
            return (
                <h4 key={actor.id}><Link className='link-actor' to={`/actor/${actor.id}`}>{actor.name}</Link></h4>
            )
        });
        return movieActors;
    }

    handleDelete = () => {
        this.props.deleteMovieDispatch(this.props.openedMovie.id, this.props.history.push);
    };

    handleEdit = () => {
        this.props.history.push(`/edit/${this.props.openedMovie.id}`);
    };

    render(){
        const {openedMovie, actors, loadingMovie, loadingActors} = this.props;

        if(loadingMovie && loadingActors && openedMovie){
            return (
                <div className = 'container'>
                    <div className='row'>
                        <h1>loading</h1>
                    </div>
                </div>
            )
        }

        return (
            openedMovie && actors && <div className='container'>
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
                                        <b>Actors: </b> {this.setActors(openedMovie, actors)}
                                    </div>
                                    <h5 key='3'>
                                        <b>Genres:</b> {openedMovie.genres.join(', ')}
                                    </h5>
                                    <hr/>
                                    <h5 className='likes' key='4'>Likes {openedMovie.likes}</h5>
                                    <hr/>
                                    <Stars movie = {openedMovie} stars = {openedMovie.stars}/>
                                </div>
                            </div>
                            <p className='description' data-spy='scroll'>
                                <b>Description:</b> {openedMovie.description}
                            </p>
                        </div>
                        <div className="buttons_movie-box">
                            <button className='btn btn-info m-3' onClick={this.handleEdit}>Edit Movie</button>
                            <button className='btn btn-danger m-3' onClick={this.handleDelete}>Delete Movie</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapSateToProps = (state) => ({
    openedMovie: state.movieBoxReducer.openedMovie,
    actors: state.movieBoxReducer.actors,
    loadingMovie: state.movieBoxReducer.loadingMovie,
    loadingActors: state.movieBoxReducer.loadingActors
});

const mapDispatchToProps = {
    deleteMovieDispatch: deleteMovie,
    getMovieDispatch: getMovieById,
    getActorsDispatch: getActors
};

const withConnect = connect(
    mapSateToProps,
    mapDispatchToProps
);

export default withConnect(MovieBox);

MovieBox.propTypes ={
    openedMovie: PropTypes.object,
    actors: PropTypes.arrayOf(PropTypes.object),
    loadingMovie: PropTypes.bool,
    loadingActors: PropTypes.bool,
    deleteMovieDispatch: PropTypes.func.isRequired,
    getMovieDispatch: PropTypes.func.isRequired,
    getActorsDispatch: PropTypes.func.isRequired
}
