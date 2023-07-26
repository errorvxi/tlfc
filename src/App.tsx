import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router/index'

function App() {
  return (
    <Suspense fallback="">
      <div className="App">{useRoutes(routes)}</div>
    </Suspense>
  )
}

export default App
