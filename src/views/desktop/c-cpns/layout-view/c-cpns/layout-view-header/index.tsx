import React from 'react'
import { FC, ReactNode } from 'react'
import { Tabs, Paper, Tab } from '@mui/material'
import { LayoutViewHeaderWrapper } from './style'
interface IProps {
  children?: ReactNode
  text: string
}

const LayoutViewHeader: FC<IProps> = ({ text }) => {
  const [value, setValue] = React.useState(2)
  const handleChange = (
    event: React.ChangeEvent<unknown>,
    newValue: number
  ) => {
    setValue(newValue)
  }
  return (
    <LayoutViewHeaderWrapper>
      <Paper square elevation={0}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
        >
          <Tab label={text} disabled />
        </Tabs>
      </Paper>
    </LayoutViewHeaderWrapper>
  )
}

export default LayoutViewHeader
