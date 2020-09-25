import types from "../../MovieBox/redux/types";

const initialState = {
    openedMovie: null,
    actors: null,
    loadingActors: true,
    loadingMovie: true
}

export const movieBoxReducer = (state = initialState, action) =>{
    switch (action.type){
        case types.MOVIE_LOADING:
            return {
                ...state,
                loadingMovie: true
            };
        case types.MOVIE_LOADED:
            return {
                ...state,
                openedMovie: action.payload.movieData,
                loadingMovie:false
            };
        case types.ACTORS_LOADING:
            return {
                ...state,
                loadingActors: true
            };
        case types.ACTORS_LOADED:
            return {
                ...state,
                actors: action.payload.data,
                loadingActors:false
            };
        case types.CHANGING_MOVIES:
            return {
                ...state,
                loading: true
            };
        case types.CHANGE_MOVIES:
            return {
                ...state,
                movies: action.payload.data,
                loading:false
            };
        case types.CHANGE_RATING:
            return {
                ...state,
                openedMovie: action.payload.dataMovie
            };
        default:
            return state;
    }
};
