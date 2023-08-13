import React from 'react'

import { MydocWrapper } from './style'
import LayoutView from '../../c-cpns/layout-view'
import { useOutletContext } from 'react-router-dom'

const Mydoc = () => {
  const [setShow, selected, setSelected] = useOutletContext() as any
  return (
    <>
      <MydocWrapper>
        <LayoutView
          text={'我的文档'}
          setShow={setShow}
          selected={selected}
          setSelected={setSelected}
        />
      </MydocWrapper>
    </>
  )
}

export default Mydoc
