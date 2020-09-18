import types from "./types";
import {moviesList} from "../../../moviesList";
import {addLike, removeLike, changeRating, sortingByLikes, sortingByRating} from "./helpFunctions";

const initialState = {
    movies: moviesList.movies,
    openedMovieId: null,
    searchMovieName: '',
    sortingByLikesClick: false,
    sortingByRatingClick: false
}

export const homePageReducer = (state = initialState, action) =>{
    if(action.type === types.FILTER_BY_NAME) {
        return {
            ...state,
            searchMovieName: action.payload.movieName
        };
    }else if(action.type === types.OPEN_MOVIE){
        return {
            ...state,
            openedMovieId: action.payload.openedMovieId
        };
    }else if(action.type === types.LIKE_MOVIE){
        return {
            ...state,
            movies: addLike(action.payload.likedMovieId, state.movies)
        };
    }else if(action.type === types.DISLIKE_MOVIE){
        return {
            ...state,
            movies: removeLike(action.payload.dislikedMovieId, state.movies)
        };
    }else if(action.type === types.CHANGE_RATING){
        return {
            ...state,
            movies: changeRating(action.payload.changedMovieId, state.movies, action.payload.starNumber)
        };
    }else if(action.type === types.SORT_BY_LIKES){
        return {
            ...state,
            movies: sortingByLikes(state.movies, state.sortingByLikesClick),
            sortingByLikesClick: !state.sortingByLikesClick
        };
    }else if(action.type === types.SORT_BY_RATING){
        return {
            ...state,
            movies: sortingByRating(state.movies, state.sortingByRatingClick),
            sortingByRatingClick: !state.sortingByRatingClick
        };
    }else if(action.type === types.RESET){
        return initialState;
    }
    return state;
}
