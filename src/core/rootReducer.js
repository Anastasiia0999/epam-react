import {combineReducers} from 'redux'
import {homePageReducer} from "../components/HomePage/redux/reducer";
//roots for reducers

export const rootReducer = combineReducers({
    homePageReducer
});
