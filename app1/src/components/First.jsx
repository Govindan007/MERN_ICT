import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const First = () => {
  return (
    <>
    <div>
      <Typography variant='h2'>Hey there......</Typography>
    </div>
    
    <div id="login" >
        <Typography variant='h3'>Login</Typography>
        <br />
        
        <TextField variant='outlined' label="Name" color='red' id="textfield"/>
        <br /><br />

    
        <TextField variant='outlined' label="Password" color='red' id="textfield"/><br /><br />
        <Button variant='contained' id="button">Submit</Button>
    </div>
    </>
  )
}

export default First
