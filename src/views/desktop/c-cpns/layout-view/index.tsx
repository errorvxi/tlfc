import React from 'react'
import { FC, ReactNode } from 'react'
import { LayoutViewWrapper } from './style'
import LayoutViewHeader from './c-cpns/layout-view-header'
import LayoutViewContent from './c-cpns/layout-view-content'
interface IProps {
  children?: ReactNode
  text: string
}

const LayoutView: FC<IProps> = ({ text }) => {
  return (
    <>
      <LayoutViewWrapper>
        <LayoutViewHeader text={text} />
        <LayoutViewContent />
      </LayoutViewWrapper>
    </>
  )
}

export default LayoutView
