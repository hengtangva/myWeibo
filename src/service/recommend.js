import request from './request';

export function getTopBanners() {
    return request({
        url: '/banner'
    })
}

export function getHotRecommend(limit = 8) {
    return request({
        url: "/personalized",
        params: {
            limit: limit
        }
    })
}

export function getNewAlbum(limit = 10, offset = 0){
    return request({
        url: "/top/album",
        // es6 的语法，对于键值一样，可以只用一个
        params: {
          limit,
          offset
        }
    })
}

export function getTopList(idx) {
    return request({
      url: "/top/list",
      params: {
        idx
      }
    })
  }