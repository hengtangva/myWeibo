
import * as actionType from './constants';

import { getTopBanners,
         getHotRecommend,
         getNewAlbum,
         getTopList
} from '../../../../../service/recommend';

export const changeTopBannerAction = (res) => ({
    type: actionType.CHANGE_TOP_BANNERS,
    topBanners: res.banners
})
export const changeHotRecommendAction = (res) => ({
    type: actionType.CHANGE_HOT_RECOMMEND,
    hotRecommends: res.result
})

export const changeNewAlbumAction = (res) => ({
    type: actionType.CHANGE_NEW_ALBUM,
    newAlbums: res.albums
})

const changeUpListAction = (res) => ({
    type: actionType.CHANGE_UP_LIST,
    topUpList: res.playlist
  })
  
const changeNewListAction = (res) => ({
    type: actionType.CHANGE_NEW_LIST,
    topNewList: res.playlist
})
  
const changeOriginListAction = (res) => ({
    type: actionType.CHANGE_ORIGIN_LIST,
    topOriginList: res.playlist
})
  
// 顶部轮播图
export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then((res) => {
            dispatch(changeTopBannerAction(res))
        })
    }
}

// 热点推荐
export const getHotRecommendAction = () => {
    return dispatch => {
        getHotRecommend().then((res) => {
            dispatch(changeHotRecommendAction(res));
        })
    }
}

// 新碟上架
export const getNewAlbumAction = () => {
    return dispatch => {
        getNewAlbum().then((res) => {
            // console.log(res);
            dispatch(changeNewAlbumAction(res));
        })
    }
}

// 榜单
export const getTopData = (idx) => {
    return dispatch => {
      getTopList(idx).then(res => {
        switch (idx) {
          case 0:
            dispatch(changeNewListAction(res));
            break;
          case 2:
            dispatch(changeOriginListAction(res));
            break;
          case 3:
            dispatch(changeUpListAction(res));
            break;
          default:
            console.log("其他数据处理");
        }
      })
    }
  }
