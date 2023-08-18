import * as React from 'react'
import { HotTable } from '@handsontable/react'
import { registerAllModules } from 'handsontable/registry'
import 'handsontable/dist/handsontable.full.min.css'
import { ContainerWrapper } from './style'
import FormularBar from './c-cpns/formular-bar'
import { useEffect, useRef, useState } from 'react'
import { convertToTitle } from '@/utils/convert'

registerAllModules()

let afterLoad: boolean = false
const defaultArr = Array.from(new Array(200), () => new Array(26).fill(''))
defaultArr[4][5] = ''
let row: number = 0,
  col: number = 0
let hot: any = null
const Container = () => {
  const hotRef: any = useRef()
  const [address, setAddress] = useState<string>('A1')
  const [output, setOutput] = useState<string>('')

  useEffect(() => {
    hot = hotRef.current.hotInstance

    if (!afterLoad) hot.selectCell(0, 0)
    afterLoad = true

    const elements = document.querySelectorAll('.hot-table')

    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', cellHandleClick, true)
    }

    return () => {
      for (let i = 0; i < elements.length; i++) {
        elements[i].removeEventListener('click', cellHandleClick, true)
      }
    }
  })

  function cellHandleClick() {
    currentChange()
  }

  function currentChange() {
    const selected = hot.getSelected()
    ;(row = selected[0][0]), (col = selected[0][1])
    const data: string = hot.getDataAtCell(row, col)
    setOutput(data)
  }

  function keepLastIndex(element: Element) {
    const range = window.getSelection()
    range?.selectAllChildren(element)
    range?.collapseToEnd()
  }

  function handleChange(e: Event) {
    const barInput = document.querySelector('.bar-input') as HTMLDivElement
    keepLastIndex(barInput)

    const value = (e.target as HTMLDivElement).innerHTML
    // hot.selectCell(row, col)
    hot.setDataAtCell(row, col, value)
    setOutput((e.target as HTMLDivElement).innerHTML)
  }

  useEffect(() => {
    const barInput = document.querySelector('.bar-input') as HTMLElement
    barInput.addEventListener('change', handleChange, true)
    return () => {
      barInput.removeEventListener('change', handleChange, true)
    }
  }, [])

  function afterChange(changes: any, source: any): any {
    if (source === 'edit') {
      const s: string = changes[0][3]
      setOutput(s)
    }
  }
  // function afterDocumentKeydown() {}
  function afterSelection(row: number, col: number) {
    const location = convertToTitle(col + 1) + (row + 1).toString()
    setAddress(location)
    const data: string = hot.getDataAtCell(row, col)
    setOutput(data)
  }
  // function afterRenderer() {
  //   console.log(hot)
  // }
  // // function beforeChange() {}
  // function afterLoadData() {
  //   console.log(hot)
  // }
  return (
    <div>
      <ContainerWrapper>
        <div className="header">
          <FormularBar
            address={address}
            output={output}
            onChange={handleChange}
          />
        </div>
        <div className="container">
          <HotTable
            outsideClickDeselects={false}
            ref={hotRef}
            data={defaultArr}
            contextMenu={true}
            persistentState={true}
            className="hot-table"
            rowHeights="24px"
            colWidths="100px"
            rowHeaders={true}
            colHeaders={true}
            licenseKey="non-commercial-and-evaluation" // for non-commercial use only
            afterSelection={afterSelection}
            afterChange={afterChange}
            // beforeChange={beforeChange}
            // afterRenderer={afterRenderer}
            // afterLoadData={afterLoadData}
            // afterDocumentKeydown={afterDocumentKeydown}
          />
        </div>
      </ContainerWrapper>
    </div>
  )
}
export default Container
