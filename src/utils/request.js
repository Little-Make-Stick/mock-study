// 在该文件写该模块接口调用
import axios from 'axios'
import { getLocal } from "@/utils/local";
import { Message } from 'element-ui';
// 导入路由
import router from '@/router/index.js'
// 创建一个axios副本(修改了axios的一些默认属性的一个新的axios)
const _fetch = axios.create({
  baseURL: process.env.VUE_APP_URL,
  //   跨域带cookie到后端
  withCredentials: true
})

// 添加请求拦截器
_fetch.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // 统一在请求拦截加上请求头
    config.headers.token = getLocal('token')
    // window.console.log('请求拦截:', config)
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
_fetch.interceptors.response.use(
  function (response) {
    // console.log(response);
    // 对响应数据做点什么
    if (response.data.success == true || response.data.code == 200) {
      return response.data.data
    }else if(response.data.code==120002){
      Message({
        message: response.data.msg,
        type: "error",
        offset: 80,
      });
      router.replace('/login')
      // console.log(response.data);
      //  return Promise.reject(response.data)
    } 
    else {
      
      Message({
        message: response.data.msg,
        type: "error",
        offset: 80,
      });
      return Promise.reject(response.data)

    }
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default _fetch
