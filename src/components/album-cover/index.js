import React, { memo } from 'react'

import { getSizeImg } from '@/utils/format-utils.js'

import { AlbumCoverWrapper } from './style'

export default memo(function THAlbumCover(props) {
    const { info, size = "100px", width = "118px", bgp = "-570px" } = props;
    return (
        <AlbumCoverWrapper width={width} size={size} bgp={bgp}>
            <div className="album-image">
                <img src={getSizeImg(info.picUrl,159)} alt=""/>
                <a className="cover sprite_cover" href="/#">{ info.name }</a>
            </div>
            <div className="album-info">
                <div className="name">{info.name}</div>
                <div className="artist">{info.artist.name}</div>
            </div>
        </AlbumCoverWrapper>
    )
})
