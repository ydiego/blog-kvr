import React from 'react'
import './index.css'
type Views = {
  count: number
}

const ArticleViews:React.FC<Views> = ({count}) => {
  return (
    <div className="article-views">
      <i className="iconfont iconeye"></i>
      {count}
    </div>
  )
}

export default ArticleViews