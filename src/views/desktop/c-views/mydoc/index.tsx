import React from 'react'

import { MydocWrapper } from './style'
import LayoutView from '../../c-cpns/layout-view'

const Mydoc = () => {
  return (
    <>
      <MydocWrapper>
        <LayoutView text={'我的文档'} />
      </MydocWrapper>
    </>
  )
}

export default Mydoc
