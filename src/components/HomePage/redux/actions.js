import types from "./types";

export const filterByName = (movieName) =>({
    type:types.FILTER_BY_NAME,
    payload:{
        movieName
    }
});

export const openMovie = (movieId) =>({
    type:types.OPEN_MOVIE,
    payload:{
        openedMovieId: movieId
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

export const sortByLikes = () =>({
    type:types.SORT_BY_LIKES
});

export const sortByRating = () =>({
    type:types.SORT_BY_RATING
});

export const resetData = () =>({
    type:types.RESET
});
