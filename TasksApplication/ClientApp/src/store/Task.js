const requestTasks = 'REQUEST_TASKS';
const receiveTasks = 'RESEIVE_TASKS';
const initialState = { tasks: [], isLoading: false };

export const actionCreators = {

    requestTasks: () => async (dispatch) => {

        dispatch({ type: requestTasks });

        const url = 'api/Task/get';
        const response = await fetch(url);
        const tasks = await response.json();

        dispatch({ type: receiveTasks, tasks });

    }

};



export const reducer = (state, action) => {

    state = state || initialState;

    if (action.type === requestTasks)
        return {
            ...state,
            isLoading: true
        };

    if (action.type === receiveTasks) {
        return {
            ...state,
            tasks: action.tasks,
            isLoading: false
        };
    }


    return state;
}