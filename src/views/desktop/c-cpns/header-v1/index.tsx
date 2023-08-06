import React, { useState, useEffect } from 'react'
import { FC, ReactNode } from 'react'
import { HeaderWrapper } from './style'
import IconMenu from '@/assets/svg/icon_menu'
import IconSearchBar from '@/assets/svg/icon_search_bar'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
interface IProps {
  children?: ReactNode
}
const HeaderV1: FC<IProps> = () => {
  const [showPanel, setShowPanel] = useState(false)

  function windowHandleClick() {
    setShowPanel(false)
  }

  useEffect(() => {
    window.addEventListener('click', windowHandleClick, true)

    return () => {
      window.removeEventListener('click', windowHandleClick, true)
    }
  }, [])
  function profileClickHandle() {
    setShowPanel(true)
  }

  return (
    <HeaderWrapper>
      <div className="left">
        <div className="search-bar">
          <div className="text">搜索</div>
          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="btns">
          <span className="btn">登录</span>
          <span className="btn">注册</span>
        </div>
        <div className="profile" onClick={profileClickHandle}>
          <IconMenu />
          <AccountCircleIcon />
        </div>
        <>
          {showPanel && (
            <div className="panel">
              <div className="top">
                <div className="title">个人中心</div>
                <div className="account-info">
                  <AccountCircleIcon className="icon" />
                  <div className="account-details">
                    <div className="username item">姓名</div>
                    <div className="mail item">jkasze@msedu.club</div>
                    <div className="item">查看账户</div>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className="panel-icon">
                  <PeopleAltIcon fontSize="large" />
                </div>
                <div className="other">使用其他账号登录</div>
              </div>
            </div>
          )}
        </>
      </div>
    </HeaderWrapper>
  )
}

export default HeaderV1
