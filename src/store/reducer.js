
import { combineReducers } from 'redux-immutable'

// 由于多个页面的 reducer 不同，因此我们要在这里合成 reducer

import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store'
import { reducer as playerReducer } from "../pages/player/store";

const cReducer = combineReducers({
    recommend: recommendReducer,
    player: playerReducer
})

export default cReducer;