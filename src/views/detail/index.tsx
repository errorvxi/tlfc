import React from 'react'
import Table from './compoents/table/table'
import ActionBar from './compoents/action-bar/action-bar'
import './indexstyle.css'
const Detail = () => {
  return (
    <>
      <ActionBar></ActionBar>
      <div className="tablebar">
        <Table></Table>
      </div>
    </>
  )
}

export default Detail
