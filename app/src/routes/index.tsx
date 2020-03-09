import loadable from '@loadable/component'

const ArticleList = loadable(() => import('../pages/article/list'))

export default [
  {
    path: '/',
    component: ArticleList,
    exact: true,
    strict: true
  }, 
  {
    path: '/about'
  }
]