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
    console.log(config)
    console.log('loading start...')
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
    console.log(response)
    console.log('loading end...')

    // const res = response.data
    // if (res.code !== 200) { // 接口必须要有一定的规范，比如code、data、message，不管什么接口，返回格式必须保持一致，后端一般都会封装一个service 统一处理返回的结果
    //   // 这里可以做一些全局性的错误提示，这样就没必要在每个请求都再写一个else,再重复代码提示
    //   console.log(res.message)
    // }
    return response.data
  },
  error => {
    console.log('error, loading end...')

    const { response } = error
    // 这里可以根据自己的业务做一些操作，比如说强制登出

    return Promise.reject(error)
  }
)
export default service
