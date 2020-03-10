import React from 'react'
import './index.css'
const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer id="footer">
      <div className="outer">
        <div id="footer-info">
            © {year} YDiego
        </div>
      </div>
    </footer>
  )
}

export default Footer