import types from "./types";

const initialState = {
    users: null,
    loadingUsers: null,
    searchMovieName: '',
    logStatus: false
}

export const userReducer = (state = initialState, action) =>{
    switch (action.type){
        case types.CHANGE_STATUS:
            return {
                ...state,
                logStatus: !state.logStatus,
                searchMovieName: ''
            };
        case types.USERS_LOADING:
            return {
                ...state,
                loadingUsers: true
            };
        case types.LOAD_USERS:
            return {
                ...state,
                users: action.payload.data,
                loadingUsers: false
            };
        case types.CHANGED_USERS:
            return {
                ...state,
                users: action.payload.data,
                loadingUsers: false
            };
        default:
            return state;
    }
};
