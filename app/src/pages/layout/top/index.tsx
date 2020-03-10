import React from 'react'
import Github from '../components/github'
import Menu from '../components/menu'
import Avatar from '../components/avatar'
import Author from '../components/author'
import Summary from '../components/summary'
import '../index.css'

const LayoutMobileNav: React.FC = () => {
  return (
    <nav id="mobile-nav">
      <div className="overlay js-overlay"></div>
      <div className="introduce">
        <header id="header" className="inner">
          <Avatar />
          <Author />
          <Summary />
          <Github />
          <Menu style={{width: '70%'}}></Menu>
        </header>
      </div>
    </nav>
  )
}

export default LayoutMobileNav