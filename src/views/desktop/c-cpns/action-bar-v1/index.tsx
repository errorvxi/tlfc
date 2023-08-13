import React from 'react'
import { FC, ReactNode } from 'react'
import { HomeButtonWrapper } from './style'
import { Button } from '@mui/material'
interface IProps {
  children?: ReactNode
  show: boolean
  setSelected: (arg: readonly string[]) => void
  selected: readonly string[]
}
import ButtonGroup from '@mui/material/ButtonGroup'
import { useAppDispatch, useAppSelector } from '@/store'
import { createDocAction, deleteDocAction } from '@/store/modules/document-info'

const ActionBarV1: FC<IProps> = ({ show, selected, setSelected }) => {
  const dispatch = useAppDispatch()
  function handleCreate() {
    dispatch(createDocAction(1))
  }

  function handleCancel() {
    if (selected.length !== 0) setSelected([])
  }
  function handleShare() {}
  function handleDownload() {}
  function handleDelete() {
    const { docs } = useAppSelector((state) => ({
      docs: state.user.documents
    }))
    // const docs_id: string[] = []
    // for (const item of selected) {
    //   for (const doc of docs) {
    //     if (item === doc.doc_name) docs_id.push(doc.doc_id)
    //   }
    // }
    console.log(docs)
    // console.log(selected)
    // console.log(docs_id)
    dispatch(deleteDocAction(selected))
  }

  return (
    <HomeButtonWrapper>
      <div className="btns">
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={handleCreate}>新建</Button>
          <Button>导入</Button>
          <>
            {show && (
              <>
                <Button onClick={handleCancel}>取消</Button>
                <Button onClick={handleShare}>分享</Button>
                <Button onClick={handleDownload}>下载</Button>
                <Button onClick={handleDelete}>删除</Button>
              </>
            )}
          </>
        </ButtonGroup>
      </div>
    </HomeButtonWrapper>
  )
}

export default ActionBarV1
