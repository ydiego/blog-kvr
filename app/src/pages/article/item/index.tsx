import React from 'react'
import { Link } from 'react-router-dom'
import 'github-markdown-css'
import './index.css'
import { Article } from '../../../types'
import ArticleHeader from '../components/header'
import ArticleTags from '../components/tags'
type ArticleItemType = {
  key?: number
  data: Article,
  isDetail?: boolean
}

const ArticleItem: React.FC<ArticleItemType> = ({ data, isDetail }) => {
  console.log(data)
  if (!Object.keys(data).length) return null

  return (
    <article id={data.title} className='article'>
      <ArticleHeader data={data}></ArticleHeader>
      {
        isDetail ? 
        <main className="article-summary markdown-body">
          <div dangerouslySetInnerHTML={{__html: data.content}}></div>
        </main>
        :
        <main className="article-summary">
          <p>{data.summary || 'where is you summary?'}</p>
          <Link className="article-more-a" to={`/article/${data.id}`}>more &gt;&gt;</Link>
        </main>
      }
      <div className="article-info article-info-index">
        <ArticleTags data={data}></ArticleTags>
        <div className="clearfix"></div>
      </div>
    </article>
  )
}

export default ArticleItem