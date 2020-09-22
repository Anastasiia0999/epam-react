import {createStore, applyMiddleware, compose} from 'redux';
import {rootReducer} from "./rootReducer";

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
export const configureStore = (initialState = {}) => createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware()),
);

