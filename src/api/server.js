import axios from 'axios'

// 创建axios实例
const service = axios.create({
  // api的base_url，本地配置的代理，理论上可以不用baseURL
  // baseURL: process.env.BASE_API,
  // headers 可以通过在这里设置，也可以在request拦截器里创建
  // headers: {'X-Custom-Header': 'foobar'},
  timeout: 15000 // 请求超时时间
})

// request 拦截器
service.interceptors.request.use(
  config => {
    // console.log(config) // 可以对请求相关统一配置些什么参数
    console.log('%c loading start...', 'background: green; color: white; display: block;')
    return config
  },
  error => {
    const { response } = error
    // 这里可以根据自己的业务做一些操作，比如说全局提示

    Promise.reject(error)
  }
)

// respone 拦截器
service.interceptors.response.use(
  response => {
    // console.log(response) // 可以对请求结果统一做些什么
    console.log('%c loading end...', 'background: green; color: white; display: block;')

    return response.data
  },
  error => {
    console.log('%c loading end...', 'background: green; color: white; display: block;')

    const { response } = error
    // 可以根据业务做一些操作，如强制登出

    return Promise.reject(error)
  }
)

export default service
