import * as Types from './actionTypes';

const initialState = {
  tasks: [],
  loading: false,
  error: null
}


export const taskReducer = (state = initialState, action) => {
    switch(action.type){
      case Types.DELETE_TASK_START:
      case Types.UPDATE_TASK_START:
      case Types.CREATE_TASK_START:
      case Types.LOAD_TASKS_START:
        return{
          ...state,
          loading: true
        }
        case Types.DELETE_TASK_ERROR:
        case Types.UPDATE_TASK_ERROR:
        case Types.CREATE_TASK_ERROR:
        case Types.LOAD_TASKS_ERROR:
          return{
            ...state,
            loading: false,
            error: action.payload
          }
      case Types.LOAD_TASKS_SUCCESS:
        return{
          ...state,
          loading: false,
          tasks: action.payload
        }
      case Types.CREATE_TASK_SUCCESS:
      return{
        ...state,
        loading: false,
      }
      case Types.UPDATE_TASK_SUCCESS:
        return{
          ...state,
          loading: false
      }
      case Types.DELETE_TASK_SUCCESS:
        return{
          ...state,
          loading: false,
          tasks: state.tasks.filter(element => element.id !== action.payload)
        }
      default:
        return state;
}
};