import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Task = () => {
  var [name, setfname]=useState("")
  return (
    <div>
      <Typography variant='h1'>Welcome to {name}</Typography>
      <Button variant='contained' onClick={()=>{setfname("Gallery")}}>Gallery</Button>
      <Button variant='contained' onClick={()=>{setfname("Home")}}>Home</Button>
      <Button variant='contained' onClick={()=>{setfname("Contact")}}>Contact</Button>
    </div>
  )
}

export default Task
