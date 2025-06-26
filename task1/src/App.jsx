import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Link, Route, Routes } from 'react-router-dom'
import Landingpage from './components/Landingpage'
import Addmovie from './components/Addmovie'
import Viewtable from './components/Viewtable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Landingpage/>}></Route>
          <Route path='/a' element={<Addmovie/>}></Route>
          <Route path='/v' element={<Viewtable/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
