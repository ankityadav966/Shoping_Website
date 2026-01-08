import React from 'react'
import Home from './Component/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Component/About'

const App = () => {
  return (
    <div>
      {/* <Home/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route  path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App