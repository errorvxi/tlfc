import React from 'react'
import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import Home from '@/views/home'
import Mydoc from '@/views/mydoc'
import Trash from '@/views/trash'
import Detail from '@/views/detail'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/mydoc',
    element: <Mydoc />
  },
  {
    path: '/trash',
    element: <Trash />
  },
  {
    path: '/detail',
    element: <Detail />
  }
]

export default routes
