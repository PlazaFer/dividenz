import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./root-reducer";
import rootSaga from "./tasksSagas";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
  ));

sagaMiddleware.run(rootSaga);
