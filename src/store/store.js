import { createStore,applyMiddleware } from "redux";
import appReducer from "../reducers/appReducer";
import thunkMiddleware from 'redux-thunk'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(
    appReducer,
    // composeEnhancer(applyMiddleware(thunkMiddleware)),
    applyMiddleware(thunkMiddleware)
    );

export default store;