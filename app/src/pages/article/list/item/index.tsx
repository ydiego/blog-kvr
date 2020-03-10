import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { Article } from '../../../../types'
import ArticleHeader from '../../components/header'
import ArticleTags from '../../components/tags'
type ArticleItemType = {
  key: number
  data: Article
}

const ArticleItem: React.FC<ArticleItemType> = ({ data }) => {

  if (!Object.keys(data).length) return null

  return (
    <article id={data.title} className='article'>
      <ArticleHeader data={data}></ArticleHeader>
      <main className="article-summary">
        <p>{data.summary || 'where is you summary?'}</p>
        <Link className="article-more-a" to={`/article/${data.id}`}>more &gt;&gt;</Link>
      </main>
      <div className="article-info article-info-index">
        <ArticleTags data={data}></ArticleTags>
        <div className="clearfix"></div>
      </div>
    </article>
  )
}

export default ArticleItem