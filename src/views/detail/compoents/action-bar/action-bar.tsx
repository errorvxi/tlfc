import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import AddIcon from '@mui/icons-material/Add'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import RemoveIcon from '@mui/icons-material/Remove'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight'
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop'
import VerticalAlignCenterIcon from '@mui/icons-material/VerticalAlignCenter'
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { ActionBarWrapper } from './style'
const ActionBar = () => {
  return (
    <ActionBarWrapper>
      <ArrowBackIcon className="btn arrow-back" />{' '}
      <ArrowForwardIcon className="btn" />
      <HighlightOffIcon className="btn" />
      <div className="btn divider">|</div>
      <div className="btn insert">
        <AddIcon />
        <span>插入</span>
      </div>
      <div className="btn">|</div>
      <span className="btn bolder">B</span>
      <FormatItalicIcon className="btn" />
      <FormatUnderlinedIcon className="btn" />
      <RemoveIcon className="btn" />
      <div className="btn">|</div>
      <FormatAlignLeftIcon className="btn" />
      <FormatAlignCenterIcon className="btn" />
      <FormatAlignRightIcon className="btn" />
      <VerticalAlignTopIcon className="btn" />
      <VerticalAlignCenterIcon className="btn" />
      <VerticalAlignBottomIcon className="btn" />
      <div className="btn">|</div>
      <MoreHorizIcon className="btn" />
    </ActionBarWrapper>
  )
}

export default ActionBar
