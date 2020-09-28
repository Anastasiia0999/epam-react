import {combineReducers} from 'redux'
import {homePageReducer} from "../components/HomePage/redux/reducer";
import {actorPageReducer} from "../components/Actor/redux/reducer";
import {movieBoxReducer} from "../components/MovieBox/redux/reducer";
import {editMovieReducer} from "../components/EditMovie/redux/reducer";
import {userReducer} from "../components/User/redux/reducer";
import {headerReducer} from "../components/Header/redux/reducer";
//roots for reducers

export const rootReducer = combineReducers({
    homePageReducer,
    actorPageReducer,
    movieBoxReducer,
    editMovieReducer,
    userReducer,
    headerReducer
});
