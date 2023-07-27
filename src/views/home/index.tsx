import React from 'react'
import HomeSiderbar from './c-cpns/home-siderbar'
import { HomeWrapper } from './style'
import HomeMain from './c-cpns/home-main'
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
