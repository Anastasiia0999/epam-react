import types from "./types";
import {sorting} from "./helpFunctions";

const initialState = {
    movies: null,
    changed_movies: null,
    searchMovieName: '',
    sortingByLikesClick: false,
    sortingByRatingClick: false,
    loadingLikes: null,
    loadingStars: null,
    loading: true
}

export const homePageReducer = (state = initialState, action) =>{
    switch (action.type){
        case types.MOVIES_LOADED:
            return {
                ...state,
                movies: action.payload.moviesData,
                changed_movies: action.payload.moviesData,
                loading: false
            };
        case types.MOVIES_LOADING:
            return {
                ...state,
                loading:true
            };
        case types.LIKE_LOADING:
            return {
                ...state,
                loadingLikes:true
            };
        case types.LIKE_LOADED:
            return {
                ...state,
                movies: action.payload.dataMovies,
                changed_movies: action.payload.dataMovies,
                loadingLikes: false
            };
        case types.RATING_LOADING:
            return {
                ...state,
                loadingStars:true
            };
        case types.RATING_LOADED:
            return {
                ...state,
                movies: action.payload.dataMovies,
                changed_movies: action.payload.dataMovies,
                loadingStars:false
            };
        case types.FILTER_BY_NAME:
            return {
                ...state,
                searchMovieName: action.payload.movieName
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
                movies: state.changed_movies,
                logStatus: state.logStatus
            };
        default:
            return state;
    }
};
