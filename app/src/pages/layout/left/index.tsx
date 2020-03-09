import React from 'react'
import {Link} from 'react-router-dom'
import '../index.css'

const LayoutLeft:React.FC = (props) => {
  return (
    <div className="left-col">
      <div className="overlay" />
      <div className="introduce">
        <header>
          <Link to='/'>
            <div className="avatar">
              <img src="/images/2000.gif" alt="avatar"/>
            </div>
          </Link>
          <hgroup>
            <h1 className="header-author">
              <Link to='/'>YDiego</Link>
            </h1>
          </hgroup>
          <p className="header-subtitle">stay foolish stay hungry</p>
          <nav className='header-menu'>
            <ul>
              <li><Link to="/">主页</Link></li>
              <li><Link to="/archives/">随笔</Link></li>
              <li><Link to="/about/">个人简介</Link></li>
            </ul>
          </nav>
          
        </header>
      </div>
    </div>
  )
}

export default LayoutLeft