import types from '../../EditMovie/redux/types'

const initialState = {
    movies: null
}

export const editMovieReducer = (state = initialState, action) =>{
    switch (action.type){
        case types.EDIT_MOVIE:
            return {
                ...state,
                movies: action.payload.dataMovies
            };
        default:
            return state;
    }
};
