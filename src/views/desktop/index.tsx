import React, { useEffect, useState } from 'react'
import Siderbar from './c-cpns/siderbar'
import HeaderV1 from './c-cpns/header-v1'
import { HomeWrapper } from './style'
import ActionBarV1 from './c-cpns/action-bar-v1'
// import { useOutletContext } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useAppDispatch } from '@/store'
import {
  fetchUserInfoDataAction,
  fetchUserDocsDataAction
} from '@/store/modules/user'
import localCache from '@/utils/localCache'
import { useNavigate } from 'react-router-dom'

const Desktop = () => {
  const [show, setShow] = useState(false)
  const [selected, setSelected] = useState<readonly string[]>([])
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const token = localCache.getCache('token')

  if (typeof token != 'string') navigate('/login')
  console.log(typeof token)
  useEffect(() => {
    const id = localCache.getCache('id') as string
    console.log(id)
    console.log(localCache)
    dispatch(fetchUserInfoDataAction(Number(id)))
    dispatch(fetchUserDocsDataAction(Number(id)))
  }, [dispatch])
  return (
    <HomeWrapper>
      <div className="home">
        <Siderbar />
        <div className="main">
          <HeaderV1 />
          <ActionBarV1
            show={show}
            setShow={setShow}
            selected={selected}
            setSelected={setSelected}
          />
          <Outlet context={[setShow, selected, setSelected]} />
        </div>
      </div>
    </HomeWrapper>
  )
}

export default Desktop
