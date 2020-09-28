import types from "./types";

export const changeStatus = () =>({
    type:types.CHANGE_STATUS
});

export const loadUsers = (data) =>({
    type:types.LOAD_USERS,
    payload:{
        data
    }
});

export const usersLoading = () =>({
    type:types.USERS_LOADING
});

export const getUsers = () => async (dispatch, _, api) =>{
    dispatch(usersLoading());
    const {data} = await api(`users`);
    dispatch(loadUsers(data));
}

export const changedUsers = (data) =>({
    type:types.CHANGED_USERS,
    payload:{
        data
    }
});

export const addUser = (login, password) => async (dispatch, _, api) =>{
    const {result} = await api(`users`, 'post',
        {
            "name": login,
            "password": password,
        });
    const {data} = await api(`users`);
    dispatch(changedUsers(data));
}




