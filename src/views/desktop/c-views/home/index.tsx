import React from 'react'
import { HomeWrapper } from './style'
import LayoutView from '../../c-cpns/layout-view'
import { useOutletContext } from 'react-router-dom'

const Home = () => {
  const [setShow, selected, setSelected] = useOutletContext() as any
  return (
    <>
      <HomeWrapper>
        <LayoutView
          text={'最近'}
          setShow={setShow}
          selected={selected}
          setSelected={setSelected}
        />
      </HomeWrapper>
    </>
  )
}

export default Home
