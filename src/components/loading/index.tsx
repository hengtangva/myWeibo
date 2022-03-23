import React from 'react'
import { Spin, Space } from 'antd';
import  './index.scss'
export default function Loading() {
  return (
    <div className = "loadingWrapper">
      <Space size="large">
        <Spin size="large" />
      </Space>,
      <div className='text'>Loading...</div>
    </div>
  )
}
