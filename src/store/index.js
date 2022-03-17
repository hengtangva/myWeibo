
// 使用 redux react-redux redux-thunk

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

// 应用多个中间件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//  第一个参数是 reducer， 第二个参数是中间件
const store = createStore(reducer,composeEnhancers(
    applyMiddleware(thunk)
))

export default store;