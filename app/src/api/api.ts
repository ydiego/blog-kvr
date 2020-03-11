import http from './http'

export const getArticleDetail = (id:number) => {
  return http.get(`/api/article/detail`, {id}).then(res => res).catch(err => err)
}