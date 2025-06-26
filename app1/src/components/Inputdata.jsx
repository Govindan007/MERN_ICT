import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Inputdata = () => {
    var [inp, setInp]=useState()
    var [data, setData]=useState()
    
    const inputHandler=(e)=>{
        setInp(e.target.value);
        
    }
    const submitHandler=()=>{
        
        setData(inp);

    }

  return (
    <div>
      <Typography variant='h3'>WELCOME{data}</Typography>
      <TextField variant='outlined' onChange={inputHandler}/><br />
      <Button variant='filled' onClick={submitHandler}>SUBMIT</Button>
    </div>
  )
}

export default Inputdata
