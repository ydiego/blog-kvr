import React from 'react'
import {BlogAuthor} from '../../../config/index'
import './index.css'
const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer id="footer">
      <div className="outer">
        <div id="footer-info">
            © {year} {BlogAuthor}
        </div>
      </div>
    </footer>
  )
}

export default Footer