import React from 'react'
import './action-barstyle.css'
const ActionBar = () => {
  return (
    <>
      <div className="nav">
        <div className="home">首页</div>
        <div className="info">无标题表格</div>
      </div>
      <div className="edit-bar">
        <div>撤回 前进 擦除</div>
        <div>插入</div>
        <div>常规</div>
        <div>字体</div>
        <div>图标栏1</div>
        <div>图标栏2</div>
        <div>图标栏3</div>
      </div>
    </>
  )
}

export default ActionBar
