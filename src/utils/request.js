import axios  from 'axios'
import { Notification } from 'element-ui'

const service = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? process.env.BASE_API : '/api', // api 的 base_url
    // baseUrl: 'api/',
    timeout:1200000 // 请求超时时间 ms 2分钟    
  })

  // request拦截器
service.interceptors.request.use(
    config => { 
      config.headers['Content-Type'] = 'application/json'
      return config 
    },
    error => {
      // Do something with request error
      console.log(error) // for debug
      Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
      const code = response.status
      if (code < 200 || code > 300) {
        Notification.error({
          title: response.message
        })
        return Promise.reject('error')
      } else {
        return response.data
      }
    },
  )


export default service