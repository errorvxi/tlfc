import React from 'react'
import { useState } from 'react'
import Cell from '../cell/cell'
import './tablestyle.css'
const Table = () => {
  const columns = 26
  const rows = 200
  const [tableArr, setTableArr] = useState(
    Array(rows)
      .fill(null)
      .map(() => Array(columns).fill(''))
  )

  const UpdataText = (e: any, column: number, row: number, arr: string[][]) => {
    console.log(`${row}row ${column}column has changed ${e.target.value}`)
    const newArr = [...arr]
    newArr[row][column] = e.target.value
    setTableArr(newArr)
  }
  return (
    <table>
      {tableArr.map((rows, rowsIndex) => (
        <tr key={rowsIndex}>
          {rows.map((celltxt, columnsIndex) => (
            <td key={columnsIndex}>
              <Cell
                celltext={celltxt}
                handlChange={UpdataText}
                row={rowsIndex}
                column={columnsIndex}
                cellArr={tableArr}
              ></Cell>
            </td>
          ))}
        </tr>
      ))}
    </table>
  )
}
export default Table
