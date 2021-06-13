
import React, { memo } from 'react'

import {
    headerLinks
} from "@/common/local-data.js";

import {
    HeadWrapper,
    HeaderLeft,
    HeaderRight
} from './style'
import { NavLink } from 'react-router-dom';
import { Input } from 'antd';
import {
    SearchOutlined
} from "@ant-design/icons"



export default memo(function THAppHeader() {

    // 页面代码
    const showSelectItem = (item, index) => {
        if(index < 3) {
            return (<NavLink to={item.link} exact> 
                        {item.title}
                        <i className="sprite_01 icon"></i>
                    </NavLink>)
        } else {
            return <a href={item.link}>{ item.title }</a>
        }
    }

    // 返回 jsx
    return (
        <HeadWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href="#/" className="logo sprite_01">网易云音乐</a>
                    <div className="select-list">
                        {
                            headerLinks.map((item, index) => {
                                return (
                                    <div key={item.title} className="select-item">
                                        { showSelectItem(item, index) }
                                    </div>
                                )
                            })
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input className="search" 
                           placeholder="音乐/视频/电台/用户"
                            prefix={ <SearchOutlined/> }
                    />
                    <button className="center">创作者中心</button>
                    <button className="login">登陆</button>
                </HeaderRight>
            </div>
            <div className="divider"></div>
        </HeadWrapper>
    )
})
