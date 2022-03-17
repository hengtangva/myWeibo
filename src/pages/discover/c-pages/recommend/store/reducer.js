
import { Map } from 'immutable';

import  * as actionType from './constants'

// 转为 immutable 对象，避免重复拷贝
const defaultState = Map({
    topBanners: [],
    hotRecommends: [],
    newAlbums: [],
    topUpList: {},
    topNewList: {},
    topOriginList: {}
})

function reducer(state = defaultState, action) {
    switch(action.type) {
        case actionType.CHANGE_TOP_BANNERS:
            //  调用 set 方法进行更新
            return state.set('topBanners', action.topBanners);
        case actionType.CHANGE_HOT_RECOMMEND:
            return state.set('hotRecommends', action.hotRecommends);
        case actionType.CHANGE_NEW_ALBUM:
            return state.set('newAlbums', action.newAlbums);
        case actionType.CHANGE_UP_LIST:
            return state.set("topUpList", action.topUpList);
        case actionType.CHANGE_NEW_LIST:
            return state.set("topNewList", action.topNewList);
        case actionType.CHANGE_ORIGIN_LIST:
            return state.set("topOriginList", action.topOriginList);
        default:
            return state;
    }
}

export default reducer;
