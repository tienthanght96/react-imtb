import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { fromJS } from 'immutable';
import { appSaga } from "./appSaga";
import { appReducer } from "./appReducer";

const initialState = {};
const composeEnhancers =
  (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
export const appStore = createStore(
  appReducer,
  fromJS(initialState),
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(appSaga);
