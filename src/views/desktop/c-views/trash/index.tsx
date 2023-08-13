import React from 'react'
import { TrashWrapper } from './style'
import LayoutView from '../../c-cpns/layout-view'
import { useOutletContext } from 'react-router-dom'

const Trash = () => {
  const [setShow, selected, setSelected] = useOutletContext() as any
  return (
    <>
      <TrashWrapper>
        <LayoutView
          text={'回收站'}
          setShow={setShow}
          selected={selected}
          setSelected={setSelected}
        />
      </TrashWrapper>
    </>
  )
}

export default Trash
