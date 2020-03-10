import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { Article } from '../../../../types'

type ArticleHeaderType = {
  data: Article
}

const ArticleHeader:React.FC<ArticleHeaderType> = ({data = {}}) => {
  return (
    <header className="article-header">
      <h1 >
        <Link className="article-title" to={`/article/${data.id}`}>{data.title}</Link>
      </h1>
      <Link to={`/article/${data.id}`} className="archive-article-date">
        <time><i className="iconcalendar iconfont"></i>{data.createdAt}</time>
      </Link>
    </header>
  )
}

export default ArticleHeader