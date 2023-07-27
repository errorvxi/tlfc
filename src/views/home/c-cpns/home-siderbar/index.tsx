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
      <div className="nav-menu">
        <div className="nav-title"></div>
        <div>
          <Link to="/home">首页</Link>
        </div>
        <div>
          <Link to="/mydoc">我的文档</Link>
        </div>
        <div>
          <Link to="/trash">回收站</Link>
        </div>
      </div>
    </SiderbarWrapper>
  )
}

export default HomeSiderbar
