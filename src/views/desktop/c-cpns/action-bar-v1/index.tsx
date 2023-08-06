import React from 'react'
import { FC, ReactNode } from 'react'
import { HomeButtonWrapper } from './style'
import { Button } from '@mui/material'
interface IProps {
  children?: ReactNode
}

const ActionBarV1: FC<IProps> = () => {
  return (
    <HomeButtonWrapper>
      <div className="btns">
        <Button
          className="new-build"
          variant="contained"
          color="primary"
          disableElevation
        >
          新建
        </Button>
        <Button
          className="introduce"
          variant="contained"
          color="inherit"
          disableElevation
        >
          导入
        </Button>
      </div>
    </HomeButtonWrapper>
  )
}

export default ActionBarV1
