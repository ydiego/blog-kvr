import React from 'react'
import { Link } from 'react-router-dom'
import 'github-markdown-css'
import './index.css'
import { Article } from '../../../types'
import ArticleHeader from '../components/header'
import ArticleTags from '../components/tags'
import ArticleViews from '../components/views'
type ArticleItemType = {
  key?: number
  data: Article,
  isDetail?: boolean
}

type ArticleNav = {
  prev: any
  next: any
}
const ArticleNav:React.FC<ArticleNav> = ({prev, next}) => {
  if (!prev && !next) return null
  return (
    <div className="article-nav">
      {
        prev && 
        <Link to={`/article/${prev.id}`} className="article-prev">
          <i className="iconfont iconzuojiantou"></i>
          {prev.title}
        </Link>
      }
      {
        next && 
        <Link to={`/article/${next.id}`} className="article-next">
          <i className="iconfont iconyoujiantou"></i>
          {next.title}
        </Link>
      }
    </div>
  )
}

const ArticleItem: React.FC<ArticleItemType> = ({ data, isDetail }) => {
  if (!Object.keys(data).length) return null

  return (
    <>
    <article id={data.title} className='article'>
      <ArticleHeader data={data}></ArticleHeader>
      {
        isDetail ? 
        <main className="article-summary markdown-body">
          <article dangerouslySetInnerHTML={{__html: data.content}}></article>
        </main>
        :
        <main className="article-summary">
          <p>{data.summary || 'where is you summary?'}</p>
          <Link className="article-more-a" to={`/article/${data.id}`}>more &gt;&gt;</Link>
        </main>
      }
      <div className="article-info article-info-index">
        <ArticleTags data={data}></ArticleTags>
        <ArticleViews count={data.visitCount}></ArticleViews>  
      </div>
    </article>
    <ArticleNav prev={data.prev} next={data.next}></ArticleNav>
    </>
  )
}

export default ArticleItem