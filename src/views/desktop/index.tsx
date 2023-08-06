import React from 'react'
import Siderbar from './c-cpns/siderbar'
import HeaderV1 from './c-cpns/header-v1'
import { HomeWrapper } from './style'
import ActionBarV1 from './c-cpns/action-bar-v1'
// import LayoutViewHeader from './c-cpns/layout-view-header'
// import LayoutViewContent from './c-cpns/layout-view-content'
import { Outlet } from 'react-router-dom'
// import routes from './router/index'
const Desktop = () => {
  return (
    <HomeWrapper>
      <div className="home">
        <Siderbar />
        <div className="main">
          <HeaderV1 />
          <ActionBarV1 />
          <Outlet />
        </div>
      </div>
    </HomeWrapper>
  )
}

export default Desktop
