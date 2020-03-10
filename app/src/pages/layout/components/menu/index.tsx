import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

type MenuType = {
  style?: object
}

const Menu:React.FC<MenuType> = ({style = {}}) => {
  return (
    <nav className="header-menu">
      <ul style={style}>
        <li><Link to="/">主页</Link></li>
        <li><Link to="/archives/">随笔</Link></li>
        <li><Link to="/about/">个人简介</Link></li>
      </ul>
    </nav>
  )
}

export default Menu