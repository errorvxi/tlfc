import React, { useState, useEffect } from 'react'
import { FC, ReactNode } from 'react'
import { HeaderWrapper } from './style'
import IconMenu from '@/assets/svg/icon_menu'
import IconSearchBar from '@/assets/svg/icon_search_bar'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import { useAppSelector } from '@/store'
import { useNavigate } from 'react-router-dom'
import localCache from '@/utils/localCache'
interface IProps {
  children?: ReactNode
}
const HeaderV1: FC<IProps> = () => {
  const [showPanel, setShowPanel] = useState(false)
  const navigate = useNavigate()
  const { username } = useAppSelector((state) => ({
    username: state.user.username
  }))

  function windowHandleClick() {
    setShowPanel(false)
  }

  function handleRegisterClick() {
    navigate('/register')
  }
  function handleOtherClick() {
    localCache.clearCache()
    navigate('/login')
  }
  function handleLogoutClick() {
    localCache.clearCache()
    navigate('/login')
  }
  useEffect(() => {
    window.addEventListener('click', windowHandleClick, true)
    const register = document.getElementById('register') as HTMLElement
    const logout = document.getElementById('logout') as HTMLElement
    logout.addEventListener('click', handleLogoutClick, true)
    register.addEventListener('click', handleRegisterClick, true)
    return () => {
      window.removeEventListener('click', windowHandleClick, true)
      logout.removeEventListener('click', handleLogoutClick, true)
      register.removeEventListener('click', handleRegisterClick, true)
    }
  }, [])
  useEffect(() => {
    const other = document.getElementById('other')
    other?.addEventListener('click', handleOtherClick, true)
    return () => {
      other?.removeEventListener('click', handleOtherClick, true)
    }
  }, [showPanel])

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
          <span className="btn" id="logout">
            登出
          </span>

          <span className="btn" id="register">
            注册
          </span>
        </div>
        <div className="profile" onClick={profileClickHandle}>
          <IconMenu />
          <AccountCircleIcon />
        </div>
        <>
          {showPanel && (
            <div className="panel" onClick={handleOtherClick}>
              <div className="top">
                <div className="title">个人中心</div>
                <div className="account-info">
                  <AccountCircleIcon className="icon" />
                  <div className="account-details">
                    <div className="username item">{username}</div>
                    {/* <div className="mail item">{email}</div> */}
                    <div className="item">查看账户</div>
                  </div>
                </div>
              </div>
              <div className="bottom" id="other">
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
