import React from 'react'
import './index.css'

import LayoutLeft from '../layout/left'
import LayoutMobileNav from '../layout/top'

const Home:React.FC = (props) => {
  return (
    <>
      <LayoutLeft />
      <div className="mid-col">
        <LayoutMobileNav></LayoutMobileNav>
        {
          props.children
        }
      </div>
      
    </>
  )
}

export default Home