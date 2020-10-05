export const editMovieFun = (movie, changedData) =>{
    const movieOnChange = movie;
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
                    movieOnChange.genres = changedData[prop].split(',');
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
    return movieOnChange;
};
