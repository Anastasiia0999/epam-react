import types from "./types";

export const filterByName = (movieName) =>({
    type:types.FILTER_BY_NAME,
    payload:{
        movieName
    }
});

export const deleteMovie = (movieId) =>({
    type:types.DELETE_MOVIE,
    payload:{
        movieId
    }
});

export const editMovie = (movieId, changedData) =>({
    type:types.EDIT_MOVIE,
    payload:{
        movieId,
        changedData
    }
});

export const likeMovie = (movieId) =>({
    type:types.LIKE_MOVIE,
    payload:{
        likedMovieId: movieId
    }
});

export const dislikeMovie = (movieId) =>({
    type:types.DISLIKE_MOVIE,
    payload:{
        dislikedMovieId: movieId
    }
});

export const changeRating = (movieId, starNumber) =>({
    type:types.CHANGE_RATING,
    payload:{
        changedMovieId: movieId,
        starNumber
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

export const changeStatus = () =>({
    type:types.CHANGE_STATUS
});
