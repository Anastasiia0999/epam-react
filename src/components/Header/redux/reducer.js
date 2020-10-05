import types from "./types";

const initialState = {
    englishOn: true
}

export const headerReducer = (state = initialState, action) =>{
    switch (action.type){
        case types.CHANGE_LANG:
            return {
                ...state,
                englishOn: !state.englishOn
            };
        default:
            return state;
    }
};
