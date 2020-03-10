import React from 'react'
import {Link} from 'react-router-dom'
import {BlogAuthor} from '../../../../config'
import './index.css'

const Author = () => {
  return (
    <hgroup>
      <h1 className="header-author">
        <Link to='/'>{BlogAuthor}</Link>
      </h1>
    </hgroup>
  )
}

export default Author