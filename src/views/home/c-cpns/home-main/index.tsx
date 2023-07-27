import React from 'react'
import { FC, ReactNode } from 'react'
import HomeHeader from './home-header'
import { HomeMainWrapper } from './style'
import HomeButton from './home-button'
interface IProps {
  children?: ReactNode
}
const HomeMain: FC<IProps> = () => {
  return (
    <HomeMainWrapper>
      <HomeHeader />
      <HomeButton />
      <div
        className="main-content"
        onClick={() => {
          window.open('/detail', '_blank')
        }}
      >
        文件详情页
      </div>
    </HomeMainWrapper>
  )
}

export default HomeMain
