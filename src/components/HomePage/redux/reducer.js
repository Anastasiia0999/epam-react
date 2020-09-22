import types from "./types";
import {data} from "../../../data";
import {addLike, removeLike, changeRating, sorting, deleteMovie, editMovie} from "./helpFunctions";

const initialState = {
    movies: [...data.movies],
    changed_movies: [...data.movies],
    actors: data.actors,
    searchMovieName: '',
    sortingByLikesClick: false,
    sortingByRatingClick: false,
    logStatus: false
}

export const homePageReducer = (state = initialState, action) =>{
    switch (action.type){
        case types.FILTER_BY_NAME:
            return {
                ...state,
                searchMovieName: action.payload.movieName
            };
        case types.EDIT_MOVIE:
            return {
                ...state,
                movies: editMovie(action.payload.movieId, state.movies, action.payload.changedData),
                changed_movies: editMovie(action.payload.movieId, state.movies, action.payload.changedData)
            }
        case types.DELETE_MOVIE:
            return {
                ...state,
                movies: deleteMovie(action.payload.movieId, state.movies),
                changed_movies: deleteMovie(action.payload.movieId, state.movies),
                searchMovieName: ''
            };
        case types.LIKE_MOVIE:
            return {
                ...state,
                movies: addLike(action.payload.likedMovieId, state.movies),
                changed_movies: addLike(action.payload.likedMovieId, state.movies)

            };
        case types.DISLIKE_MOVIE:
            return {
                ...state,
                movies: removeLike(action.payload.dislikedMovieId, state.movies),
                changed_movies: removeLike(action.payload.dislikedMovieId, state.movies)
            };
        case types.CHANGE_RATING:
            return {
                ...state,
                movies: changeRating(action.payload.changedMovieId, state.movies, action.payload.starNumber),
                changed_movies: changeRating(action.payload.changedMovieId, state.movies, action.payload.starNumber)
            };
        case types.SORT_BY_LIKES:
            return {
                ...state,
                movies: sorting(state.movies, state.sortingByLikesClick, action.payload.flag),
                sortingByLikesClick: !state.sortingByLikesClick
            };
        case types.SORT_BY_RATING:
            return {
                ...state,
                movies: sorting(state.movies, state.sortingByRatingClick, action.payload.flag),
                sortingByRatingClick: !state.sortingByRatingClick
            };
        case types.RESET:
            return {
                ...state,
                movies: [...state.changed_movies],
                logStatus: state.logStatus
            };
        case types.CHANGE_STATUS:
            return {
                ...state,
                logStatus: !state.logStatus,
                searchMovieName: ''
            };
        default:
            return state;
    }
};
