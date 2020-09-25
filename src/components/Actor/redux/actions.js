import types from "../../Actor/redux/types";

export const actorLoaded = (actorData) =>({
    type:types.ACTOR_LOADED,
    payload:{
        actorData
    }
});

export const actorLoading = () =>({
    type:types.ACTOR_LOADING
});

export const getActorById = (id) => async (dispatch,_, api) =>{
    dispatch(actorLoading());
    const {data} = await api(`actors/${id}`);
    dispatch(actorLoaded(data));
}
