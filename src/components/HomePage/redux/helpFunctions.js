export const addLike = (id, movies) =>
    movies.map(movie => {
        if (movie.id === id) {
            return {...movie, likes: movie.likes + 1}
        }
        return movie;
    });

export const removeLike = (id, movies) =>
    movies.map(movie => {
        if (movie.id === id) {
            return {...movie, likes: movie.likes - 1}
        }
        return movie;
    });

export const changeRating = (id, movies, starNumber) =>
    movies.map(movie => {
        if (movie.id === id) {
            return {...movie, stars: starNumber}
        }
        return movie;
    });

export const sorting = (movies, flag, sortFlag) =>{
    const copy = [...movies];
    if(!flag){
        copy.sort(function(a, b){
            return b[sortFlag] - a[sortFlag]
        })
    }else{
        copy.reverse();
    }
    return copy;
};

export const deleteMovie = (id, movies) =>{
    const copy = [...movies];
    const movie = copy.find((movie) => movie.id === id);
    const index = copy.indexOf(movie);
    copy.splice(index,1);
    return copy;
};

export const editMovie = (movieId, movies, changedData) =>{
    const copy = [...movies];
    const movieOnChange = copy.find(movie => movie.id === movieId);
    for(let key in changedData){
        const prop = key;
       if(!!changedData[key]){
            switch(prop){
                case 'title':
                    movieOnChange.title = changedData.title;
                    break;
                case 'director':
                    movieOnChange.director = changedData[prop];
                    break;
                case 'genres':
                    movieOnChange.genres = changedData[prop];
                    break;
                case 'posterUrl':
                    movieOnChange.posterUrl = changedData[prop];
                    break;
                case 'description':
                    movieOnChange.description = changedData[prop];
                    break;
                default:
                   return null;
            }
        }
    }
    return copy;
};






