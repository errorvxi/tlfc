import React from 'react'
import HomeSiderbar from './c-cpns/home-siderbar'
import HomeMain from './c-cpns/home-main'
import { HomeWrapper } from './style'
// import routes from './router/index'
const Home = () => {
  return (
    <HomeWrapper>
      <div className="home">
        <HomeSiderbar />
        <HomeMain />
        <div></div>
      </div>
    </HomeWrapper>
  )
}

export default Home
