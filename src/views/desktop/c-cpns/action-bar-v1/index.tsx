import React from 'react'
import { FC, ReactNode } from 'react'
import { HomeButtonWrapper } from './style'
import {
  Button,
  DialogTitle,
  DialogContent,
  Dialog,
  DialogActions,
  TextField,
  DialogContentText,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box
} from '@mui/material'
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
import { shareDocument } from '@/service/module/document-info'
let increment = 0
const ActionBarV1: FC<IProps> = ({ show, setShow, selected, setSelected }) => {
  const [open, setOpen] = React.useState(false)
  const [type, setType] = React.useState(2)
  const [target, setTarget] = React.useState('')
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
  function handleShare() {
    const docs_id: string[] = []
    for (const item of selected) {
      for (const doc of docs) {
        if (item === doc.doc_name) docs_id.push(doc.doc_id)
      }
    }
    console.log(docs_id)
    for (const id of docs_id) {
      const s_id = id.toString()
      shareDocument(user_id as string, { s_id, type, target })
    }
    handleClose()
  }
  function handleOpen() {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  function handleDownload() {}
  function handleDelete() {
    const docs_id: string[] = []
    for (const item of selected) {
      for (const doc of docs) {
        if (item === doc.doc_name) docs_id.push(doc.doc_id)
      }
    }
    setSelected([])
    setShow(false)
    dispatch(deleteDocAction({ user_id, docs_id }))
  }

  function handleType(event: any): void {
    setType(event.target.value)
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
                <Button variant="outlined" color="primary" onClick={handleOpen}>
                  分享
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">分享</DialogTitle>
                  <DialogContent>
                    <DialogContentText className="contentText">
                      请在下方输入你想分享的用户id与分享权限，点击提交后完成分享。
                    </DialogContentText>
                    <div>ㅤ</div>
                    <Box display="flex">
                      <FormControl className="formControl">
                        <InputLabel id="demo-simple-select-label">
                          权限
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={type}
                          fullWidth
                          onChange={handleType}
                        >
                          <MenuItem value={2}>只读</MenuItem>
                          <MenuItem value={1}>可编辑</MenuItem>
                          <MenuItem value={0}>最高权限</MenuItem>
                        </Select>
                      </FormControl>
                      <TextField
                        autoFocus
                        // margin="dense"
                        id="user_id"
                        label="对方的id"
                        onChange={(event) => setTarget(event.target.value)}
                      />
                    </Box>
                  </DialogContent>

                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      取消
                    </Button>
                    <Button onClick={handleShare} color="primary">
                      提交
                    </Button>
                  </DialogActions>
                </Dialog>
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
