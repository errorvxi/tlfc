import React from 'react'
import { FC, ReactNode } from 'react'
import { HomeButtonWrapper } from './style'
import { Button } from '@mui/material'
interface IProps {
  children?: ReactNode
  show: boolean
  setShow: (show: boolean) => void
  setSelected: (arg: readonly string[]) => void
  selected: readonly string[]
}
import ButtonGroup from '@mui/material/ButtonGroup'
import { useAppDispatch, useAppSelector } from '@/store'
import { createDocAction, deleteDocAction } from '@/store/modules/document-info'
import localCache from '@/utils/localCache'
let increment = 0
const ActionBarV1: FC<IProps> = ({ show, setShow, selected, setSelected }) => {
  const dispatch = useAppDispatch()
  const { docs } = useAppSelector((state) => ({
    docs: state.user.documents
  }))
  const user_id = localCache.getCache('id')
  function handleCreate() {
    if (increment == 0)
      dispatch(createDocAction({ doc_name: '未命名表格', user_id }))
    else
      dispatch(
        createDocAction({
          doc_name: '未命名表格（' + increment + '）',
          user_id
        })
      )
    increment++
  }

  function handleCancel() {
    if (selected.length !== 0) setSelected([])
  }
  function handleShare() {}
  function handleDownload() {}
  function handleDelete() {
    const docs_id: number[] = []
    for (const item of selected) {
      for (const doc of docs) {
        if (item === doc.doc_name) docs_id.push(doc.doc_id)
      }
    }
    setSelected([])
    setShow(false)
    dispatch(deleteDocAction({ user_id, docs_id }))
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
