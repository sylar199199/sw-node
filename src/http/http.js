import axios from 'axios';
import { Message } from 'element-ui';

// axios 配置
axios.defaults.timeout = 5000; // 设置请求超时
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL; // 默认请求地址
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'; // 请求头的设置
// 设置跨域携带用户凭证
//axios.defaults.withCredentials = true

// 请求
// axios.interceptors.request.use((config) => {
//   const TOKEN = localStorage.getItem('token') || '';
//   if (TOKEN) {
//     config.headers.common['Token'] = TOKEN;
//   }
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

// 返回
axios.interceptors.response.use((res) => {
  const responseCode = res.status
  if (res.data.code === -6) {
    // 被挤出清空token
    localStorage.removeItem('token');
    window.location.reload()
  }
  // 拦截器配置
  if (responseCode === 200) {
    // 第一层处理请求code
    // TODO:后期可以考虑将两层验证全部集中在service中处理
    return Promise.resolve(res)
  } else {
    Message.error('网络链接失败', 3);
    return Promise.reject(res)
  }
  // return res.data; // data数据
}, (error) => {
  // 请求失败
  Message.error('网络链接失败', 3);
  return Promise.reject(error);
});

export const get = (url) => axios.get(url);

export const post = (url, params) => axios.post(url, params);
