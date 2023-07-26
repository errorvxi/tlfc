import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router/intex'

function App() {
  return (
    <Suspense fallback="">
      <div className="App">{useRoutes(routes)}</div>
    </Suspense>
  )
}

export default App
