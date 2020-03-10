import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const Author = () => {
  return (
    <hgroup>
      <h1 className="header-author">
        <Link to='/'>YDiego</Link>
      </h1>
    </hgroup>
  )
}

export default Author