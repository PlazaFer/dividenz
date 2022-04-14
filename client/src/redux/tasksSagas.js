import {
    takeLatest,
    put,
    call,
    fork,
    all,
    take,
    delay,
  } from "redux-saga/effects";
  import { loadTaskSuccess, loadTaskError, createTaskError, createTaskSuccess, updateTaskSuccess, updateTaskError, deleteTaskError, deleteTaskSuccess } from "./actions";
  import { createTaskApi, deleteTaskApi, loadTaskApi, updateTaskApi } from "./api";
  import * as Types from './actionTypes';


  function* onLoadTaskAsync() {
      try{
        const response = yield call(loadTaskApi)
        yield put(loadTaskSuccess(response.data))
      }catch(error){
        yield put(loadTaskError(error))
      }
  }

  function* onCreateTaskAsync({ payload }) {
      try{
        const response = yield call(createTaskApi, payload)
        yield put(createTaskSuccess(response))
      }catch(error){
          yield put(createTaskError(error))
      }
  }

  function* onUpdateTaskAsync({payload: { id, values }}) {
      try{
        const response = yield call(updateTaskApi, id, values)
        yield put(updateTaskSuccess(response))
      }catch(error){
          yield put(updateTaskError(error))
      }
  }

  function* onDeleteTaskAsync({ payload }){
    try{
        yield call(deleteTaskApi, payload)
        yield put(deleteTaskSuccess(payload))
    }catch(error){
        yield put(deleteTaskError(error))
    }
  }

  function* onLoadTasks() {
    yield takeLatest(Types.LOAD_TASKS_START, onLoadTaskAsync)
  }

  function* onCreateTask() {
      yield takeLatest(Types.CREATE_TASK_START, onCreateTaskAsync)
  }

  function* onUpdateTask() {
      yield takeLatest(Types.UPDATE_TASK_START, onUpdateTaskAsync)
  }

  function* onDeleteTask() {
      yield takeLatest(Types.DELETE_TASK_START, onDeleteTaskAsync)
  }


  const tasksSagas = [
      fork(onLoadTasks),
      fork(onCreateTask),
      fork(onUpdateTask),
      fork(onDeleteTask)
  ];

  export default function* rootSaga(){
      yield all([...tasksSagas])
  }