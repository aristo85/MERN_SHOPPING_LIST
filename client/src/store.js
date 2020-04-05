import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers';
import promiseMiddleware from 'redux-promise';

// const initialState = {};
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, thunk)(createStore);
// const middleware = [thunk];
const store =  createStoreWithMiddleware(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;