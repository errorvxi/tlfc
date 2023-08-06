import React from 'react'

import Container from './compoents/container'
import { DetailWrapper } from './style'
import ActionBar from './compoents/action-bar/action-bar'
import TitleBar from './compoents/titlebar'
const Detail = () => {
  return (
    <DetailWrapper>
      <TitleBar />
      <ActionBar />
      <Container />
    </DetailWrapper>
  )
}

export default Detail
