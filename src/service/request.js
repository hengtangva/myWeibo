
// 我们对 axios 进行二次封装，避免 axios 出现重大 bug

import axios from 'axios';

import { BASE_URL , timeout } from './config'

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: timeout
})


// 可以在这里添加拦截器

instance.interceptors.request.use(config => {

    return config

  }, err => {
    // 这里是请求没有发送出去的做法
  })

  // 响应拦截

instance.interceptors.response.use(res => {
    return res.data; // 因为 axios 封装了一下响应报文，因此可以避免以后那结果都用 .data
  }, err => {
    if(err && err.response) {
      switch(err.response.status) {
        case 400:
          console.log('请求错误');
          break;
        case 401:
          console.log('未授权访问');
          break;
        default:
          console.log('其他错误');
      }
    }
  return err;
  })
// 导出去，其他请求只需要用这个 axios 实例
export default  instance;