import loadable from '@loadable/component'

const ArticleList = loadable(() => import('../pages/article/list'))
const ArticleDetail = loadable(() => import('../pages/article/detail'))

export default [
  {
    path: '/',
    component: ArticleList,
    exact: true,
    strict: true
  }, 
  {
    path: '/article/:id',
    component: ArticleDetail,
    exact: true,
    strict: true
  },
  {
    path: '/about'
  }
]