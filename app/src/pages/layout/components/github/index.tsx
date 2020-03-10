import React from 'react'
import {BlogUrl} from '../../../../config/index'
import './index.css'

const Github = () => {
  return (
    <nav className="header-nav">
      <div className="social">
          <a className="github" target="_blank" rel="noopener noreferrer" href={BlogUrl} title="github">
            <i className="iconfont icongithub"></i>
          </a>
      </div>
    </nav>
  )
}

export default Github