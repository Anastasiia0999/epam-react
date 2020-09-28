import types from "../../MovieBox/redux/types";

export const movieLoaded = (movieData) =>({
    type:types.MOVIE_LOADED,
    payload:{
        movieData
    }
});

export const movieLoading = () =>({
    type:types.MOVIE_LOADING
});

export const getMovieById = (id) => async (dispatch, _, api) =>{
    dispatch(movieLoading());
    const {data} = await api(`movies/${id}`);
    dispatch(movieLoaded(data));
}

export const actorsLoaded = (data) =>({
    type:types.ACTORS_LOADED,
    payload:{
        data
    }
});

export const actorsLoading = () =>({
    type:types.ACTORS_LOADING
});

export const getActors = () => async (dispatch, _, api) =>{
    dispatch(actorsLoading());
    const {data} = await api(`actors`);
    dispatch(actorsLoaded(data));
}

export const changeMovies = (data) =>({
    type:types.CHANGE_MOVIES,
    payload:{
        data
    }
});

export const changingMovies = () =>({
    type:types.CHANGING_MOVIES
});

export const deleteMovie = (id, push) => async (dispatch, _, api) =>{
    const {result} = await api(`movies/${id}`, 'delete');
    dispatch(changingMovies());
    const {data} = await api(`movies`);
    dispatch(changeMovies(data));
    push('/home');
};

export const starsMovieLoaded = (dataMovie) =>({
    type:types.CHANGE_RATING,
    payload:{
        dataMovie
    }
});

export const changeRating = (movie, starNumber) => async (dispatch, _, api) =>{
    const {id, title, posterUrl, likes, actorsIds, genres, director, description} = movie;
    const {result} = await api(`movies/${id}`, 'put',
        {
            "id": id,
            "title": title,
            "posterUrl": posterUrl,
            "stars": starNumber,
            "likes": likes,
            "genres": genres,
            "actorsIds": actorsIds,
            "director": director,
            "description": description
        });
    const {data} = await api(`movies/${id}`);
    dispatch(starsMovieLoaded(data));
};
