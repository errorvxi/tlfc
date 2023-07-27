import React from 'react'
import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { SiderbarWrapper } from './style'
interface IProps {
  children?: ReactNode
}
const HomeSiderbar: FC<IProps> = () => {
  return (
    <SiderbarWrapper>
      <div className="header"></div>
      <div className="logo">logo</div>
      <div className="nav-menu">
        <div className="item top">
          <Link to="/home">首页</Link>
        </div>
        <div className="item">
          <Link to="/mydoc">我的文档</Link>
        </div>
        <div className="item top">
          <Link to="/trash">回收站</Link>
        </div>
      </div>
    </SiderbarWrapper>
  )
}

export default HomeSiderbar
