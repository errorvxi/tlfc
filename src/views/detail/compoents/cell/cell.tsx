import React, { useState } from 'react'
import './cellstyle.css'

interface CellProp {
  celltext: string
  handlChange: (e: any, column: number, row: number, arr: string[][]) => void
  row: number
  column: number
  cellArr: string[][]
}

const Cell = ({ celltext, handlChange, row, column, cellArr }: CellProp) => {
  const [isActivated, setIsActivated] = useState(false)
  return (
    <input
      type="text"
      value={celltext}
      className={isActivated ? 'actived' : ''}
      onChange={(e) => handlChange(e, column, row, cellArr)}
      onFocus={() => {
        setIsActivated(true)
      }}
      onBlur={() => {
        setIsActivated(false)
      }}
    ></input>
  )
}

export default Cell
