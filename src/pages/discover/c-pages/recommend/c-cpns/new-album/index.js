import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getNewAlbumAction } from '../../store/actionCreators'

import { AlbumWrapper } from './style'
import { Carousel } from 'antd';
import THThemeHeaderRCM from '@/components/theme-header-rcm'
import THAlbumCover from '@/components/album-cover';

export default memo(function THNewAlbum() {
    // state

    // redux hooks
    const state = useSelector(state => ({
        albums: state.getIn(['recommend', 'newAlbums'])
    }), shallowEqual)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNewAlbumAction());
    }, [dispatch])

    // 其他 hooks
    const carouselRef= useRef();
    return (
        <AlbumWrapper>
            <THThemeHeaderRCM title="新碟上架" />
            <div className="content">
                <div className="arrow arrow-left sprite_02"
                    onClick={e => carouselRef.current.prev()}></div>
                <div className="album">
                    <Carousel ref={carouselRef} dots={false}>
                        {
                            [0, 1].map(item => {
                                return (
                                    <div key={item} className="page">
                                        {
                                            state.albums.slice(item * 5, (item + 1) * 5).map(item => {
                                                return (
                                                    <THAlbumCover key={item.id} info={item} />
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <div className="arrow arrow-right sprite_02"
                    onClick={e => carouselRef.current.next()}>
                </div>
            </div>
        </AlbumWrapper>
    )
})
