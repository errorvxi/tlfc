import React from 'react'
import { TrashWrapper } from './style'
import LayoutView from '../../c-cpns/layout-view'

const Trash = () => {
  return (
    <>
      <TrashWrapper>
        <LayoutView text={'回收站'} />
      </TrashWrapper>
    </>
  )
}

export default Trash
