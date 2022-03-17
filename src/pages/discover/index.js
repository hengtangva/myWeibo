import React, { memo } from 'react';

import {
    discoverMenu
} from '@/common/local-data'

import {
    DiscoverWrap,
    TopMenu
} from './style'

import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
// import request  from '@/service/request.js'
export default memo(function THDiscover(props) {
    // 测试网络请求
    // useEffect(() => {
    //     request({
    //         url: '/banner'
    //     }).then((res) => {
    //         console.log(res)
    //     })
    // },[])
    // 对于子路由，props 会传过来 route 这个对象，route.routes 即该组件上面的子路由
    const { route } = props;

    // console.log(route)
    return (
        <DiscoverWrap>
            <div className="top">
                <TopMenu className="wrap-v1">
                    {
                        discoverMenu.map((item) => {
                            return (
                                <div className="item" key={item.title}>
                                    <NavLink to={ item.link }>{ item.title }</NavLink>
                                </div>
                            )
                        })
                    }
                </TopMenu>
            </div>
            { renderRoutes(route.routes) }
        </DiscoverWrap>
    )
})
