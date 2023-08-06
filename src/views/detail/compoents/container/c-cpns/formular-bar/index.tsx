import React, { useRef } from 'react'
import { useEffect, FC, ReactNode } from 'react'
import { FormularBarWrapper } from './style'

interface IProps {
  children?: ReactNode
  address: string
  output: string
  onChange: any
}

const FormularBar: FC<IProps> = ({ address, output, onChange }) => {
  const inputRef: any = useRef(null)

  function handleClick() {
    inputRef.current.focus()
  }

  useEffect(() => {
    const barInput = document.querySelector('.bar-input') as Element
    barInput.addEventListener('click', handleClick, true)
    return () => {
      barInput.removeEventListener('click', handleClick, true)
    }
  }, [])

  return (
    <FormularBarWrapper>
      <div className="bar-label">{address}</div>
      <div
        className="bar-input"
        ref={inputRef}
        suppressContentEditableWarning={true}
        contentEditable="true"
        onInput={onChange}
      >
        {output}
      </div>
    </FormularBarWrapper>
  )
}

export default FormularBar
