

import React, { memo } from 'react'

import THTopBanner from './c-cpns/top-banners';
import THHotRecommend from './c-cpns/hot-recommend'
import THNewAlbum from './c-cpns/new-album'
import THRankingList from './c-cpns/ranking-list'
import {
    RecommendWrapper,
    RecommendLeft,
    RecommendRight,
    Content
} from './style'

function THRecommend(props) {
  
    return (
        <RecommendWrapper>
            <THTopBanner/>
            <Content className="wrap-v2">
                <RecommendLeft>
                    <THHotRecommend/>
                    <THNewAlbum/>
                    <THRankingList/>
                </RecommendLeft>
                <RecommendRight>

                </RecommendRight>
            </Content>
        </RecommendWrapper>
            
    )
}

export default memo(THRecommend);


// 这里是一开始的写法

// import React, { memo, useEffect } from 'react'
// import { connect } from 'react-redux'

// import { getTopBannerAction } from './store/actionCreators'

// function THRecommend(props) {
//     const { getBanners,topBanners } = props;
//     useEffect(() => {
//         getBanners();
//     },[getBanners])
//     return (
//         <div>
//             <h2>推荐</h2>
//             { topBanners.length }
//         </div>
//     )
// }
// // 从 state 拿到 topBanners 供组件使用
// const mapStateToProps = state => ({
//     topBanners: state.recommend.topBanners
// });

// // 组件调用请求函数，触发 dispatch 派发更新
// const mapDispatchToProps = dispatch => ({
//     getBanners: () => {
//         dispatch(getTopBannerAction())
//     }
// })
// export default connect(mapStateToProps, mapDispatchToProps)(memo(THRecommend));

