import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import AddIcon from '@mui/icons-material/Add'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import RemoveIcon from '@mui/icons-material/Remove'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight'
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop'
import VerticalAlignCenterIcon from '@mui/icons-material/VerticalAlignCenter'
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Divider from '@mui/material/Divider'
// import Paper from '@mui/material/Paper'
// import FormatBoldIcon from 'mui/icon-material/FormatBoldIcon'
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup/ToggleButtonGroup'
// import { ToggleButton } from '@mui/material'

import { ActionBarWrapper } from './style'
const ActionBar = () => {
  return (
    <ActionBarWrapper>
      <ArrowBackIcon className="btn arrow-back" />{' '}
      <ArrowForwardIcon className="btn" />
      <HighlightOffIcon className="btn" />
      <Divider flexItem orientation="vertical" className="divider" />
      <div className="btn insert">
        <AddIcon />
        <span>插入</span>
      </div>
      <Divider flexItem orientation="vertical" className="divider" />
      <FormatBoldIcon className="btn" />
      <FormatItalicIcon className="btn" />
      <FormatUnderlinedIcon className="btn" />
      <RemoveIcon className="btn" />
      <Divider flexItem orientation="vertical" className="divider" />
      <FormatAlignLeftIcon className="btn" />
      <FormatAlignCenterIcon className="btn" />
      <FormatAlignRightIcon className="btn" />
      <VerticalAlignTopIcon className="btn" />
      <VerticalAlignCenterIcon className="btn" />
      <VerticalAlignBottomIcon className="btn" />
      <Divider flexItem orientation="vertical" className="divider" />
      <MoreHorizIcon className="btn" />
    </ActionBarWrapper>
  )
}

export default ActionBar
