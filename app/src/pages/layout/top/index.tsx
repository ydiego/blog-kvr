import React from 'react'
import {Link} from 'react-router-dom'
import '../index.css'

const LayoutMobileNav: React.FC = () => {
  return (
    <nav id="mobile-nav">
      <div className="overlay js-overlay"></div>
      <div className="introduce">
        <header id="header" className="inner">
          <div className="profilepic">
            <img src="/images/2000.gif" className="js-avatar" alt='avatar' />
			    </div>
          <hgroup>
            <h1 className="header-author js-header-author">YDiego</h1>
          </hgroup>
          <p className="header-subtitle">stay foolish stay hungry</p>
          <nav className="header-nav"></nav>

          <nav className="header-menu js-header-menu">
            <ul style={{ "width": "70%" }}>
              <li><Link to="/">主页</Link></li>
              <li><Link to="/archives/">随笔</Link></li>
              <li><Link to="/about/">个人简介</Link></li>
            </ul>
          </nav>
        </header>	
        <div className="mobile-mask" ></div>
      </div>
    </nav>
  )
}

export default LayoutMobileNav