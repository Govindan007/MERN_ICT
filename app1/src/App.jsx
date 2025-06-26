import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './components/First'
import { Typography } from '@mui/material'
import Reg from './components/Reg'
import Datatable from './components/Datatable'
import DataCard from './components/DataCard'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import StateBasic from './components/StateBasic'
import Task from './components/Task'
import Counter from './components/Counter'
import Inputdata from './components/Inputdata'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Typography variant='h1'></Typography>
      {/* <First/> */}
      {/* <Reg/> */}
      {/* <Datatable/> */}
      {/* <DataCard/> */}
      <Navbar/>
      {/* <StateBasic/> */}
      <Routes>
        <Route path="/" element={<First/>} />
        <Route path='/r' element={<Reg/>}/>
        <Route path='/dt' element={<Datatable/>}/>
        <Route path='/dc' element={<DataCard/>}/>
        <Route path='/sb' element={<StateBasic/>}/>
        <Route path='/t' element={<Task/>}/>
        <Route path='/c' element={<Counter/>}/>
        <Route path='/i' element={<Inputdata/>}/>
      </Routes>
      
      
    </>
  )
}

export default App
