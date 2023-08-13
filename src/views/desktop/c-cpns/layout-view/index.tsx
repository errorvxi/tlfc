import React from 'react'
import { FC, ReactNode } from 'react'
import { LayoutViewWrapper } from './style'
import LayoutViewHeader from './c-cpns/layout-view-header'
import LayoutViewContent from './c-cpns/layout-view-content'
interface IProps {
  children?: ReactNode
  text: string
  setShow?: (show: boolean) => void
  selected?: readonly string[]
  setSelected?: (arg: readonly string[]) => void
}

const LayoutView: FC<IProps> = ({ text, setShow, selected, setSelected }) => {
  return (
    <>
      <LayoutViewWrapper>
        <LayoutViewHeader text={text} />
        <LayoutViewContent
          setShow={setShow as (show: boolean) => void}
          selected={selected}
          setSelected={setSelected}
        />
      </LayoutViewWrapper>
    </>
  )
}

export default LayoutView
