import * as Types from './actionTypes';

export const loadTaskStart = () => ({
    type: Types.LOAD_TASKS_START
});

export const loadTaskSuccess = (tasks) => ({
    type: Types.LOAD_TASKS_SUCCESS,
    payload: tasks
});

export const loadTaskError = (error) => ({
    type: Types.LOAD_TASKS_ERROR,
    payload: error
});

export const createTaskStart = (task) => ({
    type: Types.CREATE_TASK_START,
    payload: task
});

export const createTaskSuccess = () => ({
    type: Types.CREATE_TASK_SUCCESS
});

export const createTaskError = (error) => ({
    type: Types.CREATE_TASK_ERROR,
    payload: error
})

export const updateTaskStart = (task) => ({
    type: Types.UPDATE_TASK_START,
    payload: task
});

export const updateTaskSuccess = (task) => ({
    type: Types.UPDATE_TASK_SUCCESS,
    payload: task
});

export const updateTaskError = (error) => ({
    type: Types.UPDATE_TASK_ERROR,
    payload: error
});


export const deleteTaskStart = (id) => ({
    type: Types.DELETE_TASK_START,
    payload: id
});

export const deleteTaskSuccess = (id) => ({
    type: Types.DELETE_TASK_SUCCESS,
    payload: id
});

export const deleteTaskError = (error) => ({
    type: Types.DELETE_TASK_ERROR,
    payload: error
})