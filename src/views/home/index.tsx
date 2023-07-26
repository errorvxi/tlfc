import React from 'react'
import { useNavigate } from 'react-router-dom'
// import routes from './router/index'
const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div>
        <button
          onClick={() => {
            navigate('/detail')
          }}
        >
          文件详情页
        </button>
      </div>
    </div>
  )
}

export default Home
