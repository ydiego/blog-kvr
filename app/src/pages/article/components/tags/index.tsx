import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { Article } from '../../../../types'

type ArticleTagsType = {
  data: Article
}
const ArticleTags:React.FC<ArticleTagsType> = ({data}) => {

  const tags = data.tag ? data.tag.split(',') : []

  return (
    <div className="article-tag tagcloud">
      <i className="iconbiaoqian iconfont"></i>
      <ul className="article-tag-list">
        {
          tags.map(tag => {
            const randomColor = Math.floor(Math.random() * 5) + 1
            return (
              <li className="article-tag-list-item">
                <a href="javascript:void(0)" className={`article-tag-list-link color${randomColor}`}>{tag}</a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default ArticleTags