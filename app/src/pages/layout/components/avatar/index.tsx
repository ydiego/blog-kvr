import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const Avatar = () => {
  return (
    <>
      <Link to='/'>
        <div className="avatar">
          <img src="/images/2000.gif" alt="avatar"/>
        </div>
      </Link>
    </>
  )
}

export default Avatar