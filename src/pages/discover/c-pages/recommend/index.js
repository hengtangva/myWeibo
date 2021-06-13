import React, { memo, useEffect } from 'react'
import request from '@/service/request.js'

export default memo(function THRecommend() {
    // hooks 钩子，模拟 didMount
    useEffect(() => {
        request({
            url: '/banner'
        }).then((res) => {
            console.log(res);
        })
    },[])
    return (
        <div>
            <h2>推荐</h2>
        </div>
    )
})
