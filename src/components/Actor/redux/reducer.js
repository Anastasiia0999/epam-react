import types from "../../Actor/redux/types";

const initialState = {
    openedActor: null,
    loading: true
}

export const actorPageReducer = (state = initialState, action) =>{
    switch (action.type){
        case types.ACTOR_LOADING:
            return {
                ...state,
                loading: true
            };
        case types.ACTOR_LOADED:
            return {
                ...state,
                openedActor: action.payload.actorData,
                loading:false
            };
        default:
            return state;
    }
};
