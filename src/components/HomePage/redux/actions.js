import types from "./types";

export const moviesLoaded = (moviesData) =>({
    type:types.MOVIES_LOADED,
    payload:{
        moviesData
    }
});

export const moviesLoading = () =>({
    type:types.MOVIES_LOADING
});

export const getMovies = () => async (dispatch, _, api) =>{
    dispatch(moviesLoading());
    const {data} = await api(`movies`);
    dispatch(moviesLoaded(data));
}

export const likeMovieLoaded = (dataMovies) =>({
    type:types.LIKE_LOADED,
    payload:{
        dataMovies
    }
});

export const putLikes = (movie, flag) => async (dispatch, _, api) =>{
    const {id, title, posterUrl, stars, likes, actorsIds, genres, director, description} = movie;
    let likesNumber = flag ? likes + 1 : likes - 1 ;
    const {result} = await api(`movies/${id}`,'put',
        {
            "id": id,
            "title": title,
            "posterUrl": posterUrl,
            "stars": stars,
            "likes": likesNumber,
            "genres": genres,
            "actorsIds": actorsIds,
            "director": director,
            "description": description
        });
    const {data} = await api(`movies`);
    dispatch(likeMovieLoaded(data));
};

export const starsMovieLoaded = (dataMovies) =>({
    type:types.RATING_LOADED,
    payload:{
        dataMovies
    }
});

export const putRating = (movie, starNumber) => async (dispatch, _, api) =>{
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
    const {data} = await api(`movies`);
    dispatch(starsMovieLoaded(data));
};

export const filterByName = (movieName) =>({
    type:types.FILTER_BY_NAME,
    payload:{
        movieName
    }
});

export const sortByLikes = (flag) =>({
    type:types.SORT_BY_LIKES,
    payload:{
        flag
    }
});

export const sortByRating = (flag) =>({
    type:types.SORT_BY_RATING,
    payload:{
        flag
    }
});

export const resetData = () =>({
    type:types.RESET
});

