import React, { memo } from 'react'

import { getCount, getSizeImg } from '../../utils/format-utils'

import {
    SongWrapper
} from './style'
export default memo(function THSongsCover(props) {
    const { info, right } = props;
    return (
        <SongWrapper right={right}>
            <div className="cover-top">
                <img src={getSizeImg(info.picUrl,140)} alt=''/>
                <div className="cover sprite_cover">
                    <div className="info sprite_cover">
                        <span>
                            <i className="sprite_icon earPhone"></i>
                            {getCount(info.playCount)}
                        </span>
                        <i className="sprite_icon play"></i>
                    </div>
                </div>
            </div>
            <div className="cover-bottom text-nowrap">
                { info.name }
            </div>
            <div className="cover-source">
               by {info.copywriter || info.creator.nickname}
            </div>
        </SongWrapper>
    )
})
