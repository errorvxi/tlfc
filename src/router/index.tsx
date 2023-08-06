import React, { lazy } from 'react'
import { Navigate, type RouteObject } from 'react-router-dom'
// import { Navigate } from 'react-router-dom'

const Desktop = lazy(() => import('@/views/desktop'))
const Home = lazy(() => import('@/views/desktop/c-views/home'))
const Mydoc = lazy(() => import('@/views/desktop/c-views/mydoc'))
const Trash = lazy(() => import('@/views/desktop/c-views/trash'))
const Detail = lazy(() => import('@/views/detail'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/desktop" />
  },
  {
    path: '/desktop',
    element: <Desktop />,
    children: [
      { path: '/desktop', element: <Navigate to="/desktop/home" /> },
      {
        path: '/desktop/home',
        element: <Home />
      },
      {
        path: '/desktop/mydoc',
        element: <Mydoc />
      },
      {
        path: '/desktop/trash',
        element: <Trash />
      }
    ]
  },

  {
    path: '/detail',
    element: <Detail />
  }
]

export default routes
