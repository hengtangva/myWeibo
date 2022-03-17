import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getHotRecommendAction } from '../../store/actionCreators';

import THThemeHeaderRCM from '@/components/theme-header-rcm'
import THSongsCover from '@/components/songs-cover';
import {
    HotRecommendWrapper
} from './style'



export default memo(function THHotRecommend() {
    // redux hooks
    const { hotRecommends } = useSelector(state => ({
        hotRecommends: state.getIn(['recommend','hotRecommends'])
    }),shallowEqual)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getHotRecommendAction())
    },[dispatch])

    return (
        <HotRecommendWrapper>
            <THThemeHeaderRCM title="热门推荐" keywords={["华语",'流行','摇滚','电子','民谣']}/>
            <div className="recommend-list">
                {hotRecommends.map((item, index) => {
                    return <THSongsCover info={item} key={item.id}/>
                })}
            </div>
        </HotRecommendWrapper>
    )
})
