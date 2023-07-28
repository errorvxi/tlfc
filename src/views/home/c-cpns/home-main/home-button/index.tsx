import React from 'react'
import { FC, ReactNode } from 'react'
import { HomeButtonWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const HomeButton: FC<IProps> = () => {
  return (
    <HomeButtonWrapper>
      <div className="btns">
        <div className="new-build">新建</div>
        <div className="introduce">导入</div>
      </div>
    </HomeButtonWrapper>
  )
}

export default HomeButton
