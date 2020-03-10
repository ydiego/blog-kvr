import React from 'react'
import Github from '../components/github'
import Menu from '../components/menu'
import Avatar from '../components/avatar'
import Author from '../components/author'
import Summary from '../components/summary'
import '../index.css'

const LayoutLeft:React.FC = (props) => {
  return (
    <div className="left-col">
      <div className="overlay" />
      <div className="introduce">
        <header>
          <Avatar />
          <Author />
          <Summary/>
          <Menu />
          <Github />
        </header>
      </div>
    </div>
  )
}

export default LayoutLeft