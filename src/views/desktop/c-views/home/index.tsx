import React from 'react'
import { HomeWrapper } from './style'
import LayoutView from '../../c-cpns/layout-view'

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <LayoutView text={'最近'} />
      </HomeWrapper>
    </>
  )
}

export default Home
