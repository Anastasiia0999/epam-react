export const addLike = (id, movies) =>{
    const copy = movies.slice(0);
    const likedMovie = movies.find( movie => movie.id === id);
    likedMovie.likes += 1;

    return copy;
}

export const removeLike = (id, movies) =>{
    const copy = movies.slice(0);
    const dislikedMovie = copy.find( movie => movie.id === id);
    dislikedMovie.likes -= 1;

    return copy;
}

export const changeRating = (id, movies, starNumber) =>{
    const copy = movies.slice(0);
    const changedMovie = copy.find(movie => movie.id === id);
    changedMovie.stars = starNumber;

    return copy;
}

export const sortingByLikes = (movies, flag) =>{
    const copy = movies.slice(0);
    if(!flag){
        copy.sort(function(a, b){
            return b.likes - a.likes
        })
    }else{
        copy.reverse();
    }

    return copy;
}

export const sortingByRating = (movies, flag) =>{
    const copy = movies.slice(0);

    if(!flag){
        copy.sort(function(a, b){
            return b.stars - a.stars
        })
    }else{
        copy.reverse();
    }

    return copy;
}





