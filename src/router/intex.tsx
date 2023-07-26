import React, { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const Home = lazy(() => import('@/views/home'))
const Mydoc = lazy(() => import('@/views/mydoc'))
const Trash = lazy(() => import('@/views/trash'))
const Detail = lazy(() => import('@/views/detail'))

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
