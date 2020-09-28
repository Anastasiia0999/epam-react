import types from "./types";

const initialState = {
    englishOn: true,
    ukrOn: false
}

export const headerReducer = (state = initialState, action) =>{
    switch (action.type){
        case types.CHANGE_LANG:
            return {
                ...state,
                englishOn: !state.englishOn,
                ukrOn: !state.ukrOn
            };
        default:
            return state;
    }
};
