import React from 'react'
import './index.css'

import LayoutLeft from '../layout/left'
import LayoutMobileNav from '../layout/top'
import LayoutFooter from '../layout/footer'

const Home:React.FC = (props) => {
  return (
    <>
      <LayoutLeft />
      <div className="mid-col">
        <LayoutMobileNav></LayoutMobileNav>
        {
          props.children
        }
        <LayoutFooter></LayoutFooter>
      </div>
    </>
  )
}

export default Home