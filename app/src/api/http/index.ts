import axios, { AxiosInstance } from 'axios'
const config =require('../../../package.json')

const baseUrl:string = process.env.NODE_ENV === 'development' ?
config.proxy:
'/';

const http:AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000
})

http.defaults.headers.common = {
  'Content-Type': 'application/json; charset=UTF-8'
}

http.interceptors.response.use(response => {
  const {data = {}} = response
  if (data.code !== '0000') {
    return Promise.reject(data)
  }
  return data
}, err => {
  let {response = {}} = err
  return Promise.reject(response)
})

export default {
  post(url:string, data: any) {
    return http({
      method: 'post',
      url,
      data,
    })
  },
  get(url:string, params?:object) {
    return http({
      method: 'get',
      url,
      params
    })
  }
}