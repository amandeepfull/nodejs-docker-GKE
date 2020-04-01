import {createStore, applyMiddleware} from 'redux';
import commonReducer from '../reducers/common';
import thunk from 'redux-thunk'
const store = createStore(commonReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
