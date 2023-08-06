import React from 'react'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
// import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import LayoutViewContentWrapper from './style'

interface Column {
  id: 'filename' | 'owner' | 'time' | 'modifier'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

const columns: Column[] = [
  { id: 'filename', label: '文件名', minWidth: 170 },
  { id: 'owner', label: '所有者', minWidth: 100 },
  {
    id: 'time',
    label: '修改时间',
    minWidth: 170,
    format: (value: number) => value.toLocaleString('en-US')
  },
  {
    id: 'modifier',
    label: '活动',
    minWidth: 170,
    format: (value: number) => value.toFixed(2)
  }
]

interface Data {
  filename: string
  owner: string
  time: string
  modifier: string
}

function createData(
  filename: string,
  owner: string,
  time: string,
  modifier: string
): Data {
  return { filename, owner, time, modifier }
}

const rows = [
  createData(
    '钢铁是怎样练成的',
    'WanderlustDreamer',
    '22:32',
    'SonnenstrahlGlow'
  ),
  createData('钢铁是这样炼成的', '静谧Starlight', '07-22', 'KirschblüteBreeze'),
  createData('到底是怎样练成的', 'Togashi Yuuta', '22-12-31', 'EinsamkeitSoul'),
  createData('4', 'ダークフレイムマスター', '2021-09-01', 'Weidendorf'),
  createData('5', 'Genshin', '2020...', 'Start!'),
  createData('6', '赵丽娜', '2019...', '9833520')
]

// createData('Ireland', 'IE', 4857000, 70273),
// createData('Mexico', 'MX', 126577691, 1972550),
// createData('Japan', 'JP', 126317000, 377973),
// createData('France', 'FR', 67022000, 640679),
// createData('United Kingdom', 'GB', 67545757, 242495),
// createData('Russia', 'RU', 146793744, 17098246),
// createData('Nigeria', 'NG', 200962417, 923768),
// createData('Brazil', 'BR', 210147125, 8515767)

export default function LayoutViewContent() {
  const handleClick = () => {
    window.open('/detail', '_blank')
  }
  return (
    <LayoutViewContentWrapper>
      <Paper className="root">
        <TableContainer className="container">
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow className="header">
                {columns.map((column) => (
                  <TableCell
                    className="header-cell"
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                return (
                  <TableRow
                    className="cell"
                    role="checkbox"
                    tabIndex={-1}
                    key={row.owner}
                  >
                    {columns.map((column) => {
                      const value = row[column.id]
                      return (
                        <TableCell
                          className={
                            'cell ' +
                            (column.id === 'filename'
                              ? 'filename'
                              : column.id === 'owner'
                              ? 'owner'
                              : '')
                          }
                          onClick={handleClick}
                          key={column.id}
                          align={column.align}
                        >
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </LayoutViewContentWrapper>
  )
}
