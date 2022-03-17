import React, { memo } from 'react'

import { ThemeHeader } from './style';


export default memo(function THThemeHeaderRCM(props) {

    // 防止没有传来 keywords，可以结构的时候赋一个空数组
    const { title, keywords=[] } = props;
    return (
        <ThemeHeader className="sprite_02">
            <div className="left">
                <h3 className="title">{ title }</h3>
                <div className="keywords">
                    {
                        keywords.map((item, index) => {
                            return (
                                <div className="item" key={item}>
                                    <span className="link">{item}</span>
                                    <span className="divider">|</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="right">
                <a href="/#">更多</a>
                <i className="icon sprite_02"></i>
            </div>
        </ThemeHeader>
    )
})
