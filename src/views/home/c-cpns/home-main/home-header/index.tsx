import React, { useState, useEffect } from 'react'
import { FC, ReactNode } from 'react'
import { HeaderWrapper } from './style'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avator'
import IconSearchBar from '@/assets/svg/icon_search_bar'
interface IProps {
  children?: ReactNode
}
const HomeHeader: FC<IProps> = () => {
  const [showPanel, setShowPanel] = useState(false)

  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false)
    }
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
          <IconAvatar />

          {showPanel && (
            <div className="panel">
              <div className="top">
                <div className="item">个人中心</div>
              </div>
              <div className="middle">
                <div className="item">切换账号</div>
              </div>
              <div className="bottom">
                <div className="item">退出登录</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </HeaderWrapper>
  )
}

export default HomeHeader
