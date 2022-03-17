import React, { memo, useState, useEffect, useCallback, useRef } from 'react'

//  这里我们用 react-redux 提供的 hooks 来避免繁琐的 mapPropsToState 等
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getTopBannerAction } from '../../store/actionCreators'

import {
    BannerWrapper,
    BannerLeft,
    BannerRight,
    BannerControl
} from './style'

import { Carousel } from 'antd';

export default memo(function THTopBanner() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const { topBanners } = useSelector(state => ({
        topBanners: state.getIn(['recommend', 'topBanners'])
    }), shallowEqual)

    // 用 useDispatch hook 去分发 action，从而改变 state
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTopBannerAction());
    }, [dispatch])

    //  useCallback 对回调函数做记忆化处理，保持对该组件的引用，防止该组件重新刷新
    const bannerChange = useCallback((from, to) => {
        // 这里是走马灯的 api 回调，to 是跳转到下一个图片的 index
        setCurrentIndex(to);
    },[])

    const bannerRef = useRef();

    // 使用之前判断一下 有没有拿到数组，防止拿到的是 undefined
    const bgImage = topBanners[currentIndex] && topBanners[currentIndex].imageUrl;
    return (
        <BannerWrapper bgImage={bgImage}>
            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
                        {
                            topBanners.map((item) => {
                                return (
                                    <div className="banner-item" key={item.imageUrl}>
                                        <img className='image' src={item.imageUrl} alt="" />
                                    </div>
                                )
                            })
                        }
                    </Carousel>,
                </BannerLeft>
                <BannerRight>
                </BannerRight>
                <BannerControl>
                    <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
                    <button className="btn right" onClick={e => bannerRef.current.next()}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})
