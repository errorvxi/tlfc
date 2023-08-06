import React from 'react'
import { FC, ReactNode } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import { TitleBarWrapper } from './style'
import IconMenu from '@/assets/svg/icon_menu'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ShareIcon from '@mui/icons-material/Share'
interface IProps {
  children?: ReactNode
}

const TitleBar: FC<IProps> = () => {
  return (
    <TitleBarWrapper>
      <div className="left">
        <div className="home">
          <HomeIcon />
        </div>
        <div className="divider">|</div>
        <input className="info" value="无标题表格" />
        <ShareIcon />
      </div>
      <div className="right">
        <div className="profile">
          <IconMenu />
          <AccountCircleIcon />
        </div>
      </div>
    </TitleBarWrapper>
  )
}

export default TitleBar
