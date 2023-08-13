import { ReactNode } from 'react'

export type Data = {
  owner: string
  activity: string
  mtime: string // Modification time
  name: string
}

export type IProps = {
  children?: ReactNode
  setShow: (show: boolean) => void
  handleCancel?: () => void
  selected?: readonly string[]
  setSelected?: (arg: readonly string[]) => void
}

export type EnhancedTableToolbarProps = {
  numSelected: number
}

export type EnhancedTableProps = {
  numSelected: number
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  order: Order
  orderBy: string
  rowCount: number
}

export type HeadCell = {
  disablePadding: boolean
  id: keyof Data
  label: string
  align: 'left' | 'center' | 'right' | 'inherit' | 'justify' | undefined
}

export type Order = 'asc' | 'desc'
