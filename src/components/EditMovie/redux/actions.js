import types from "../../EditMovie/redux/types";
import {editMovieFun} from "./helpFunctions";

export const changeMovie = (dataMovies) =>({
    type:types.EDIT_MOVIE,
    payload:{
        dataMovies
    }
});

export const editMovie = (movie,changedData, push) => async (dispatch,_,api) =>{
    const changedMovie = editMovieFun(movie,changedData);
    const {id, title, posterUrl, likes, stars,  actorsIds, genres, director, description} = changedMovie;
    const {result} = await api(`movies/${id}`,'put',
        {
            "id": id,
            "title": title,
            "posterUrl": posterUrl,
            "stars": stars,
            "likes": likes,
            "genres": genres,
            "actorsIds": actorsIds,
            "director": director,
            "description": description
        })
    const {data} = await api(`movies`);
    dispatch(changeMovie(data));
    push(`/movies`);
};
